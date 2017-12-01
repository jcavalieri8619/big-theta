# Big Theta API Lambda Functions

This directory contains the AWS Lambda functions that were used as the backend API called by the Big Theta web application. Each function interacts with a Neo4j database running on an EC2 instance using the Neo4j JavaScript Bolt driver.

In order to test these endpoints locally, the `testNeoLocal.js` file was used. Mock values were used for the Lambda environment variables. The Neo4j JavaScript driver must first be installed before anything will run by using `npm install neo4j-driver` in this directory.

When creating the Lambda function, the corresponding file above must be compressed along with with the `node_modules` folder and uploaded to AWS. Environment variables must be specified to communicate with EC2 as well.