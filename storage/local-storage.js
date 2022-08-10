localStorage.setItem("hareket", "burpee");
localStorage.setItem("try", 50);

// ALL TIME STRING
const value = localStorage.getItem("tekrar");
console.log(value);
console.log(typeof value);
console.log(localStorage.getItem("sport")); //null

if (localStorage.getItem("sport") === null){
	console.log("Sorguladığınız veri bulunmuyor.")
}
else {
	console.log("Sorguladığınız veri bulunuyor.")

}

// Clear local storage

//localStorage.clear();

// Local storage - Write Array

const todos = ["Todo 1", "Todo 2","Todo 3"];

localStorage.setItem("todos", JSON.stringify(todos));  // not string its array

console.log(localStorage.getItem("todos"));


