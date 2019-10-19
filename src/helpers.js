const chalk = require("chalk");

const greet = person =>
  console.log(`Hello ${chalk.yellow(person.name)}! Would you like a ticket?`);

exports.greet = greet;
