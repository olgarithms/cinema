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

class Seat {
    constructor(number) {
      this.number = number;
      this.isOccupied = false;
      // this.occupant = null;
    }
    giveSeat(person) {
        this.isOccupied = true
        this.occupant = person
        person.assignSeat(this.number)
        // this.occupant.assignSeat(this.number)
    }
}

class Person {
    constructor(name) {
      this.name = name;
      this.assignedSeat = null;
    }
    assignSeat(number) {
        this.assignedSeat = number;
    }
}


let c = new Cinema('WTM Cinema', 5)
let p = new Person('Olga')
console.log(`Hello ${p.name}! Would you like a ticket?`);
c.sellTicket(p)
console.log(`Here you are! Your seat number is ${p.assignedSeat}.`);
