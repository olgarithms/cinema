const Seat = require('./seat.js');

class Cinema {
    constructor(film, numOfSeats) {
      this.film = film;
      this.numOfSeats = numOfSeats;
      this.seats = new Array();
      for (let i = 0; i < numOfSeats; i++) {
        this.seats.push(new Seat(i + 1));
      }
    }
    sellTicket(person) {
        let number;
        do {
            number = Math.floor(Math.random() * this.numOfSeats);
        } while (this.seats[number].isOccupied);
        this.seats[number].giveSeat(person);
    }
}

module.exports = Cinema;
