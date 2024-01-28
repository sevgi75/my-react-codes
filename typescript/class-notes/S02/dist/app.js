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
class Person {
    constructor(name) {
        this.name = name;
    }
    greet() {
        console.log(`Merhaba ${this.name}`);
    }
}
class Employee extends Person {
    constructor(emplyCode, name) {
        super(name);
        this.emplyCode = emplyCode;
    }
}
let person1 = new Person("Sevgi");
console.log(person1.name);
let emp4 = new Employee(100, "Enes");
console.log(emp4.name);
person1.greet();
emp4.greet();
