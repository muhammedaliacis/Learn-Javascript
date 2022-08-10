function Person(name,age){
    this.name = name;
    this.age = age;
}
Person.prototype.showInfos = function(){
    console.log(this.name + this.age);
}

// const person = new Person("muhammed", 25);
// console.log(person);

function Employee(name,age,salary){
    // this.name = name;
    // this.age = age;
    Person.call(this,name,age);
    this.salary = salary;
}

Employee.prototype = Object.create(Person.prototype);
Employee.prototype.toString = function(){
    console.log("Employee")
}
Employee.prototype.showInfos = function(){
    console.log(this.name, this.age, this.salary)
}
const emp = new Employee("muhammed", 25, 4000);

emp.showInfos();
emp.toString();