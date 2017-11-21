const neo4j = require('neo4j-driver').v1;


// setting variables for local testing
process.env["neo4jBoltIp"] = "localhost";
process.env["neo4jUser"] = "neo4j";
process.env["neo4jPassword"] = "big-theta-team";

const driver = neo4j.driver(`bolt://${process.env["neo4jBoltIp"]}/`, neo4j.auth.basic(process.env["neo4jUser"], process.env["neo4jPassword"]));
const session = driver.session();

let eventsubjectid = "4";
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

const resultPromise = session.writeTransaction(tx => tx.run(
  'MATCH (subject:SUBJECT)-[r:SAME_PAGE_AS]->(eq:EQUATION) \
  WHERE ID(subject) = {subjectid} \
  RETURN eq LIMIT 20', {subjectid: subjectid}));

resultPromise.then(result => {
  session.close();
  let equations = [];
  result.records.forEach(rec => {
    let eq = rec.get("eq");
    let returnEq = {
      id: eq.identity.toString(),
      name: eq.properties.name.trim(),
      equation: eq.properties.equation
    };
    equations.push(returnEq);
  });
  driver.close();
  console.log(JSON.stringify(equations, null, 2));
});