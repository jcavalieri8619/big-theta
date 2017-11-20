const neo4j = require('neo4j-driver').v1;


// setting variables for local testing
process.env["neo4jBoltIp"] = "localhost";
process.env["neo4jUser"] = "neo4j";
process.env["neo4jPassword"] = "big-theta-team";

const driver = neo4j.driver(`bolt://${process.env["neo4jBoltIp"]}/`, neo4j.auth.basic(process.env["neo4jUser"], process.env["neo4jPassword"]));
const session = driver.session();

let searchTerm = "distribution".toLowerCase();

const resultPromise = session.writeTransaction(tx => tx.run(
  'MATCH (subject:SUBJECT) WHERE (toLower(subject.name) contains {searchTerm} or toLower(subject.title) contains {searchTerm}) and subject.pagerank is not null return subject order by subject.pagerank desc limit 10', {searchTerm: searchTerm}));

resultPromise.then(result => {
  session.close();
  result.records.forEach(rec => {
    let subj = rec.get("subject");
    let returnSubj = {
      id: subj.identity.toString(),
      title: subj.properties.title.trim(),
      url: subj.properties.url
    };

    console.log(JSON.stringify(returnSubj, null, 2));
  });
  driver.close();
});