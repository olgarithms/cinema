const Cinema = require("./cinema.js");
const helpers = require("./helpers.js");
const Person = require("./person.js");

const cinema = new Cinema("WTM Cinema", 5);

const olga = new Person("Olga");
const alice = new Person("Alice");
const bob = new Person("Bob");
const eve = new Person("Eve");

const customers = [olga, alice, bob, eve];

customers.forEach(helpers.greet);
cinema.sellTicket(olga);
console.log(
  `Here you, ${olga.name}! Your seat number is ${olga.assignedSeat}.`
);
