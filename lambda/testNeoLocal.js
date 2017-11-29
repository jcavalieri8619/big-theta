const neo4j = require('neo4j-driver').v1;


// setting variables for local testing
process.env["neo4jBoltIp"] = "localhost";
process.env["neo4jUser"] = "neo4j";
process.env["neo4jPassword"] = "big-theta-team";

const driver = neo4j.driver(`bolt://${process.env["neo4jBoltIp"]}/`, neo4j.auth.basic(process.env["neo4jUser"], process.env["neo4jPassword"]));
const session = driver.session();

let searchTerm = "distribution";

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

  console.log(subjects, null, 2);
});