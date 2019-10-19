const chalk = require("chalk");
const Cinema = require("./cinema.js");
const Person = require("./person.js");

const greet = person =>
  console.log(`Hello ${chalk.yellow(person.name)}! Would you like a ticket?`);

exports.greet = greet;
