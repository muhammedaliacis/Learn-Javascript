class Person {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    showInfos(){
        console.log(this.name + this.age);
    }
}

class Employee extends Person {  //DerivedClass, subclass, childclass
    constructor(name,age,salary){
        // this.name = name;
        // this.age = age;
        super(name,age);
        this.salary = salary;

    }
    showInfos(){
        console.log(this.name + this.age);   
    }
    toString(){
        console.log("Employee");
    }
    raiseSalart(amount){
        this.salary += amount;
    }
}

const emp = new Employee("Muhammed", 21, 5000);
emp.showInfos();