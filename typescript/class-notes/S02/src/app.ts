//& Classes

// class Employee {
//     empCode: number;
//     empName: string;

//     constructor (code:number, name:string){
//         this.empCode = code;
//         this.empName = name;
//     }
// }

// let emp1 = new Employee(1, "Sevgi")
// // let emp2 = new Employee("Sevgi",2)
// let emp3 = new Employee(2, "Ebrar")

// console.log(emp3.empCode);

//& Inheritance

// class Person {
//     name:string;

//     constructor(name:string){
//         this.name = name;
//     }

//     greet():void{
//         console.log(`Merhaba ${this.name}`);
//     }
// }

// class Employee extends Person {
//     emplyCode:number;

//     constructor(emplyCode: number, name:string){
//         super(name);
//         this.emplyCode = emplyCode;
//     }
// }

// let person1 = new Person("Sevgi")

// console.log(person1.name);

// let emp4 = new Employee(100, "Enes")

// console.log(emp4.name);

// person1.greet()
// emp4.greet()

//& Abstract Classes

abstract class Vehicle{

    year:number;
    color:string;

    constructor(year: number, color: string){
        this.year = year;
        this.color = color;
    }

    startEngine():void{
        console.log(`Motor Calisti`);
    }

    abstract stopEngine(): void;
}

class Car extends Vehicle{
    model:string;
    numOfDoors: number;

    constructor(year: number, color: string, model: string, numOfDoors: number){
        super(year, color);
        this.model = model;
        this.numOfDoors = numOfDoors
    }

    stopEngine(): void {
        console.log("Motor Durduruldu");
    }
}

let car1 = new Car(1990, "Siyah", "Fiat", 4)

console.log(car1);

car1.startEngine()
car1.stopEngine()