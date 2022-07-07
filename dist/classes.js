"use strict";
class Department {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        // private readonly id: string;
        // name: string;
        this.employees = [];
        // this.id = id;
        // this.name = n;
    }
    static createEmployee(name) {
        return { name: name };
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
Department.fiscalYear = 2020;
class ITDepartment extends Department {
    constructor(id, admins) {
        super(id, 'Accounting');
        this.admins = admins;
    }
}
class AccountingDepartment extends Department {
    constructor(id, reports) {
        super(id, 'IT');
        this.reports = reports;
        this.lastReport = reports[0];
    }
    get mostRecentReport() {
        if (this.lastReport) {
            return this.lastReport;
        }
        throw new Error('レポートが見つかりません');
    }
    set mostRecentReport(value) {
        if (!value) {
            throw new Error('正しい値を設定してください');
        }
        this.addReport(value);
    }
    describe() {
        console.log('会計部門 ID:' + this.id);
    }
    addReport(text) {
        this.reports.push(text);
        this.lastReport = text;
    }
    printReports() {
        console.log(this.reports);
    }
    addEmployee(name) {
        if (name === 'Max') {
            return;
        }
        this.employees.push(name);
    }
}
const it = new ITDepartment('d1', ['Max']);
const employee1 = Department.createEmployee('Mini');
console.log(employee1, Department.fiscalYear);
it.addEmployee('Max');
it.addEmployee('Manu');
// it.employees[2] = 'Anna'
it.describe();
it.printEmployeeInformation();
console.log(it);
const accounting = new AccountingDepartment('d2', []);
accounting.mostRecentReport = 'レポーター';
accounting.addReport('something');
console.log(accounting.mostRecentReport);
// accounting.printReports();
accounting.addEmployee('Max');
accounting.addEmployee('Manu');
// accounting.printEmployeeInformation();
accounting.describe();
