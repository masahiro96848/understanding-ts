class Department {
    static fiscalYear = 2020;
    // private readonly id: string;
    // name: string;
    protected employees:  string[] = [];

    static createEmployee(name: string) {
        return { name: name };
    }

    constructor(protected readonly id: string, public name: string) {
        // this.id = id;
        // this.name = n;
    }

    describe(this: Department) {
        console.log(`Department (${this.id}): ${this.name}`);
    }

    addEmployee(employee: string) {
        this.employees.push(employee)
    }

    printEmployeeInformation() {
        console.log(this.employees.length)
        console.log(this.employees)
    }
}

class ITDepartment extends Department{
    constructor(id: string, private admins: string[]){
        super(id, 'Accounting');
        
    }
}

class AccountingDepartment extends Department {
    private lastReport: string;

    get mostRecentReport() {
        if (this.lastReport) {
            return this.lastReport;
        }
        throw new Error('レポートが見つかりません');
    }

    set mostRecentReport(value: string) {
        if (!value) {
            throw new Error('正しい値を設定してください');
        }
        this.addReport(value);
    }

    constructor(id: string, private reports: string[]){
        super(id, 'IT');
        this.lastReport = reports[0];
        
    }

    describe() {
        console.log('会計部門 ID:' + this.id);
    }

    addReport(text: string) {
        this.reports.push(text);
        this.lastReport = text;
    }

    printReports() {
        console.log(this.reports);
    }

    addEmployee(name: string) {
        if (name === 'Max') {
            return;
        }
        this.employees.push(name);
    }
}

const it=  new ITDepartment('d1', ['Max']);

const employee1 = Department.createEmployee('Mini');
console.log(employee1, Department.fiscalYear);

it.addEmployee('Max');
it.addEmployee('Manu');

// it.employees[2] = 'Anna'

it.describe()
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