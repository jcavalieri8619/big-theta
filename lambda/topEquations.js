/*

AWS Lambda function to get top ranking equations. Corresponds to /equations/top

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
        "Access-Control-Allow-Origin": "*"
    },
  });

  const driver = neo4j.driver(`bolt://${process.env["neo4jBoltIp"]}/`, neo4j.auth.basic(process.env["neo4jUser"], process.env["neo4jPassword"]));
  const session = driver.session();
  
  const resultPromise = session.readTransaction(tx => tx.run(
    'MATCH (subject:SUBJECT)-[r:SAME_PAGE_AS]->(eq:EQUATION) \
     WITH collect(eq) AS eqs, subject, COUNT(eq) as eqCount \

     WITH toInteger(floor(rand()*eqCount)) AS eqIndex, eqs, subject \

     RETURN subject, eqs[eqIndex] AS eq \

     ORDER BY subject.pagerank DESC \

     LIMIT 10'));
  
  resultPromise.then(result => {
    session.close();
    let equations = [];
    result.records.forEach(rec => {
      let eq = rec.get("eq");
      let subj = rec.get("subject");
      let returnEq = {
        id: eq.identity.toString(),
        name: subj.properties.title.trim(),
        equation: eq.properties.equation,
        url: subj.properties.url
      };
      equations.push(returnEq);
    });
    driver.close();

    done(null, equations);
  });
};