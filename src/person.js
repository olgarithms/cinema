class Person {
  constructor(name) {
    this.name = name;
    this.assignedSeat = null;
  }
  assignSeat(number) {
    this.assignedSeat = number;
  }
}

module.exports = Person;
