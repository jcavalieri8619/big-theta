const neo4j = require('neo4j-driver').v1;


// setting variables for local testing
process.env["neo4jBoltIp"] = "localhost";
process.env["neo4jUser"] = "neo4j";
process.env["neo4jPassword"] = "big-theta-team";

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

let eventsubjectid = "58424";
// let subjectid;

// try {
//   subjectid = neo4j.int(eventsubjectid);
// } catch (exception) {
//   done({message: "Subject ID is invalid"}, null);
//   return;
// }

if (!eventsubjectid.match(/\d+/)) {
  // done({message: "Subject ID is invalid"}, null);
  console.log("Invalid subject id");
  return;
}

let subjectid = neo4j.int(eventsubjectid);

let exclusions = [];

const rootQuery = session.readTransaction(tx => tx.run(
  'MATCH (s:SUBJECT)-[:LINKS_TO]-(s2:SUBJECT) \
  WHERE ID(s) = {subjectid} \
  RETURN s AS parent, collect(s2)[..5] AS children', {subjectid: subjectid}));

rootQuery.then(result => {
  let tree = {};
  let rec = result.records[0];
  let parent = rec.get("parent");
  let children = rec.get("children");
  tree = graphNodeToTreeNode(parent);
  tree.children = children.map(graphNodeToTreeNode);
  let numChildren = tree.children.length;
  exclusions.concat(children.map(c => c.identity));

  let currentChild = 0;

  function populateChildren() {
    getTreeLevel(neo4j.int(tree.children[currentChild].id), exclusions, result => {
      let grandChildren = result.records[0].get("children");
      tree.children[currentChild].children = grandChildren.map(graphNodeToTreeNode);
      exclusions.concat(grandChildren.map(c => c.identity));
      currentChild++;
      if (currentChild < numChildren) {
        populateChildren();
      } else {
        session.close();
        driver.close();
        console.log(JSON.stringify(tree, null, 2));
      }
    });
  }

  populateChildren();
  
});