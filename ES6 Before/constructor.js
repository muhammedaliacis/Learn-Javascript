// const emp1 = {
//     name: "Muhammed",
//     age: 25,
//     showInfos: function() { console.log("function"); }
// };

// emp1.salary = 4000;

function Employee(name, age, salary) { // Constructor Function
    this.name = name;
    this.age = age;
    this.salary = salary;

    this.showInfos = function() {
        console.log(this.name, this.age, this.salary)
    }
}

const emp1 = new Employee("Muhammed", 25, 15000);
const emp2 = new Employee("Ali", 21, 25000);

emp1.showInfos();
emp2.showInfos();