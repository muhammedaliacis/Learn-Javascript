// const object = new Object();
// const object2 = new Object();

// object.name = "Muhammed";
// console.log(object);

// function Employee(name, age) {
//     this.name = name;
//     this.age = age;
//     this.showInfos = function() {
//         console.log("Bilgiler göstreiliyor");
//     }
//     this.toString = function() {
//         console.log("This Employee objects");
//     }
// }

function Employee(name, age) {
    this.name = name;
    this.age = age;

}

Employee.prototype.showInfos = function(){
    console.log(this.name + this.age);
}
const emp1 = new Employee("Muhammed", 25);
const emp2 = new Employee("Ali", 21);

emp1.showInfos();
console.log(emp1);
console.log(emp2);


console.log(emp1.toString());