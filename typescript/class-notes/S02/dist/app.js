class Vehicle {
    constructor(year, color) {
        this.year = year;
        this.color = color;
    }
    startEngine() {
        console.log(`Motor Calisti`);
    }
}
class Car extends Vehicle {
    constructor(year, color, model, numOfDoors) {
        super(year, color);
        this.model = model;
        this.numOfDoors = numOfDoors;
    }
    stopEngine() {
        console.log("Motor Durduruldu");
    }
}
let car1 = new Car(1990, "Siyah", "Fiat", 4);
console.log(car1);
car1.startEngine();
car1.stopEngine();
