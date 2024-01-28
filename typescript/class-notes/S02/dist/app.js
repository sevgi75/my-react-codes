//& Classes
class Employee {
    constructor(code, name) {
        this.empCode = code;
        this.empName = name;
    }
}
let emp1 = new Employee(1, "Sevgi");
// let emp2 = new Employee("Sevgi",2)
let emp3 = new Employee(2, "Ebrar");
console.log(emp3.empCode);
