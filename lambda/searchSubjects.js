/*

AWS Lambda function to test neo4j.

Add the following environment variables to your Lambda function:
  neo4jBoltIp: The accessibile IP address of your bolt instance
  neo4jUser: The username of the neo4j instance to log in
  neo4jPassword: The password for the neo4j user

*/

const neo4j = require('neo4j-driver').v1;


exports.handler = (event, context, callback) => {
  const driver = neo4j.driver(`bolt://${process.env["neo4jBoltIp"]}/`, neo4j.auth.basic(process.env["neo4jUser"], process.env["neo4jPassword"]));
  const session = driver.session();

  let searchTerm = "distribution".toLowerCase();
  
  const resultPromise = session.writeTransaction(tx => tx.run(
    'MATCH (subject:SUBJECT) WHERE (toLower(subject.name) contains {searchTerm} or toLower(subject.title) contains {searchTerm}) and subject.pagerank is not null return subject order by subject.pagerank desc limit 10', {searchTerm: searchTerm}));
  
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

    callback(null, {
      statusCode: "200",
      body: subjects,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  });
};