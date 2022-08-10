// const obj = {
//     test1:function(){
//         console.log("test1");
//     },
//     test2:function(){
//         console.log("test2");
//     }
// }

//console.log(obj);

// const emp = Object.create(obj);
// emp.name = "Muhammed";
// const emp2 = Object.create(emp);
// console.log(emp2);

function Person(){

}
Person.prototype.test1 = function(){
    console.log("test1");
}
Person.prototype.test2 = function(){
    console.log("test2");
}

function Employee(name, age){
    this.name = name;
    this.age = age
}

Employee.prototype = Object.create(Person.prototype);