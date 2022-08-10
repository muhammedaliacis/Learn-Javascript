const filterInput = document.getElementById("filter");
//ONFOCUS


filterInput.onfocus = function(){
    console.log("hello");
}

//OR

filterInput.addEventListener("focus",function(e){
    console.log(e);
    console.log(e.type);
    console.log(e.target);
    console.log(e.target.placeholder);



    console.log("hello");
})

console.log(filterInput)

//SUBMIT

const todoForm = document.getElementById("todo-form");

todoForm.addEventListener("submit", function(e){
    alert("Submit event");


    e.preventDefault();
})