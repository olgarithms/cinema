const Seat = require("./seat.js");

class Cinema {
  constructor(film, numOfSeats) {
    this.film = film;
    this.numOfSeats = numOfSeats;
    this.seats = new Array();
    this.availableSeats = new Array();
    for (let i = 0; i < numOfSeats; i++) {
      this.seats.push(new Seat(i + 1));
      this.availableSeats.push(i);
    }
  }
  sellTicket(person) {
    let number = this.availableSeats[
      Math.floor(Math.random() * this.availableSeats.length)
    ];
    this.seats[this.availableSeats[number]].giveSeat(person);
    this.availableSeats.splice(number, 1);
  }
  serve(person) {
    this.sellTicket(person);
    console.log(
      `Here you go, ${person.name}! Your seat number is ${person.assignedSeat}.`
    );
  }
}

module.exports = Cinema;
