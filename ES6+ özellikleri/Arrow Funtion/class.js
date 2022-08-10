// function Employee(name,age,salary){
//     this.name = name;
//     this.age = age;
//     this.salary = salary;
// }

// Employee.prototype.showInfos = function(){
//     console.log(this.name + this.age + this.salary);
// }
// const emp = new Employee("Muhammed",21, 2300);


// ES6+
class Employee {
    constructor(name,age,salary){
    this.name = name;
    this.age = age;
    this.salary = salary;
    }
    showInfos(){
        console.log(this.name + this.age + this.salary);
    }
}

const emp = new Employee("Muhammed", 21, 2300);
