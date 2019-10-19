class Seat {
  constructor(number) {
    this.number = number;
    this.isOccupied = false;
  }
  giveSeat(person) {
    this.isOccupied = true;
    this.occupant = person;
    person.assignSeat(this.number);
  }
}

module.exports = Seat;
