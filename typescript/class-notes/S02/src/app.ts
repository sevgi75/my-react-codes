//& Classes

class Employee {
    empCode: number;
    empName: string;

    constructor (code:number, name:string){
        this.empCode = code;
        this.empName = name;
    }
}

let emp1 = new Employee(1, "Sevgi")
// let emp2 = new Employee("Sevgi",2)
let emp3 = new Employee(2, "Ebrar")

console.log(emp3.empCode);