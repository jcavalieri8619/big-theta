/*

AWS Lambda function to get a tree of subjects given a root node id. Corresponds to /subject/tree/{subjectid}

Add the following environment variables to your Lambda function:
  neo4jBoltIp: The accessibile IP address of your bolt instance
  neo4jUser: The username of the neo4j instance to log in
  neo4jPassword: The password for the neo4j user

*/

const neo4j = require('neo4j-driver').v1;


exports.handler = (event, context, callback) => {
  const done = (err, res) => callback(null, {
    statusCode: err ? '400' : '200',
    body: err ? JSON.stringify({ message: err.message }) : JSON.stringify(res),
    headers: {
        'Content-Type': 'application/json',
    },
  });

  const driver = neo4j.driver(`bolt://${process.env["neo4jBoltIp"]}/`, neo4j.auth.basic(process.env["neo4jUser"], process.env["neo4jPassword"]));
  const session = driver.session();

  function getTreeLevel(subjectid, exclusions, callback) {
    session.readTransaction(tx => tx.run(
      'MATCH (s:SUBJECT)-[:LINKS_TO]-(s2:SUBJECT) \
      WHERE ID(s) = {subjectid} \
      AND NOT ID(s2) IN {exclusions} \
      RETURN s AS parent, collect(s2)[..5] AS children', {subjectid: subjectid, exclusions: exclusions}))
      .then(callback);
  }
  
  function graphNodeToTreeNode(graphNode) {
    return {
      id: graphNode.identity.toString(),
      name: graphNode.properties.title.trim(),
      url: graphNode.properties.url
    }
  }

  if (!event.pathParameters.subjectid.match(/\d+/)) {
    done({message: "Subject ID is invalid"}, null);
    return;
  }
  
  let exclusions = [];
  
  getTreeLevel(neo4j.int(event.pathParameters.subjectid), exclusions, result => {
    if (result.records == null || result.records.length === 0) {
      session.close();
      driver.close();
      done(null, {});
      return;
    }
    let tree = {};
    let rec = result.records[0];
    let parent = rec.get("parent");
    let children = rec.get("children");
    tree = graphNodeToTreeNode(parent);
    tree.children = children.map(graphNodeToTreeNode);
    let numChildren = tree.children.length;
    exclusions = exclusions.concat(children.map(c => c.identity));
  
    let currentChild = 0;
  
    (function populateChildren() {
      getTreeLevel(neo4j.int(tree.children[currentChild].id), exclusions, result => {
        if (result.records != null && result.records.length > 0) {
          let grandChildren = result.records[0].get("children");
          tree.children[currentChild].children = grandChildren.map(graphNodeToTreeNode);
          exclusions = exclusions.concat(grandChildren.map(c => c.identity));
        }
        currentChild++;
        if (currentChild < numChildren) {
          populateChildren();
        } else {
          session.close();
          driver.close();
          done(null, tree);
        }
      });
    })();
    
  });
};