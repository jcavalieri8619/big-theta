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
  console.log("connected driver");
  const session = driver.session();
  console.log("connected session");
  
  const resultPromise = session.writeTransaction(tx => tx.run(
    'MATCH (tom:Person {name: "Tom Hanks"})-[:ACTED_IN]->(tomHanksMovies) RETURN tom,tomHanksMovies'));
  
  resultPromise.then(result => {
    session.close();
    // result.records.forEach(rec => {
    //   console.log(JSON.stringify(rec));
    // });
  
    // const singleRecord = result.records[0];
    // const greeting = singleRecord.get(0);
  
    // console.log(greeting);
  
    // on application exit:
    driver.close();

    callback(null, {
      statusCode: "200",
      body: result.records,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  });
};