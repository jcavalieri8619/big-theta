/*

AWS Lambda function to search the graph for subjects. Corresponds to /subject/search/{searchterm}

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

  let searchTerm = event.pathParameters.searchterm.toLowerCase();
  
  const resultPromise = session.readTransaction(tx => tx.run(
    'MATCH (subject:SUBJECT) \
    WHERE (toLower(subject.name) CONTAINS {searchTerm} OR toLower(subject.title) CONTAINS {searchTerm}) \
    AND subject.pagerank IS NOT NULL RETURN subject \
    ORDER BY subject.pagerank DESC LIMIT 10', {searchTerm: searchTerm}));
  
  resultPromise.then(result => {
    session.close();
    let subjects = [];
    result.records.forEach(rec => {
      let subj = rec.get("subject");
      let returnSubj = {
        id: subj.identity.toString(),
        title: subj.properties.title.trim(),
        url: subj.properties.url
      };
      subjects.push(returnSubj);
    });
    driver.close();

    done(null, subjects);
  });
};