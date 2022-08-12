//keypress NUMBERS OR CHAR

// document.addEventListener("keypress", run);

// function run(e){
//     console.log(e.which); //ascii
//     console.log(e.key);   //char
//     console.log("hello");
// }

//keydown  ALL 

// document.addEventListener("keydown", run2);

// function run2(e){
//     console.log(e.key)
// }

//keyup  hold key one print

// document.addEventListener("keyup", run3);

// function run3(e){
//     console.log(e.key)
// }


// example

const header = document.querySelector(".card-header");
const todoinput = document.querySelector("#todo");

todoinput.addEventListener("keyup",changetext);

function changetext(e){
    header.textContent = e.target.value;
    console.log(e.target.value);
}