"use strict";
class Department {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        // private id: string;
        // name: string;
        this.employees = [];
        // this.id = id;
        // this.name = n;
    }
    describe() {
        console.log(`Department (${this.id}): ${this.name}`);
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}
const accounting = new Department('d1', 'Accounting');
accounting.addEmployee('Max');
accounting.addEmployee('Manu');
// accounting.employees[2] = 'Anna'
accounting.describe();
accounting.printEmployeeInformation();
