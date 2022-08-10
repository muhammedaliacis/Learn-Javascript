//                     <a id = "clear-todos" class="btn btn-dark" href="#">Tüm Taskları Temizleyin</a>         
const newLink = document.createElement("a");
const cardbody = document.getElementsByClassName("card-body")[1];

newLink.id = "clear-todos";
newLink.className = "btn btn-danger";
newLink.href = "www.muhammedaliacis.com.tr";
newLink.target = "_blank";

const text = document.createTextNode("ok");
newLink.appendChild(text);

cardbody.appendChild(newLink);


console.log(cardbody);

console.log(newLink);



// DELETE ELEMENT

newLink.remove();
// newLink.removeChild(newLink.lastElementChild);

//CHANGE ELEMENT

const cardbodyy = document.querySelectorAll(".card-body")[1];

const newElement = document.createElement("h3");

newElement.className = "card-title";
newElement.id = "tasks-title";
newElement.textContent = "New Todos";

const oldElement = document.querySelector("#tasks-title");

cardbodyy.replaceChild(newElement, oldElement);

console.log(newElement);


//ATTRIBUTE CHANGE DELETE ADD

const todoInput = document.getElementById("todo");
let element;

element = todoInput.classList;

todoInput.classList.add("newClass");
todoInput.classList.add("newClass2");

element = todoInput.placeholder;
todoInput.setAttribute("placehoder", "hello");
todoInput.setAttribute("title", "Input");

element = todoInput.placeholder;
element = todoInput.hasAttribute("name");



console.log(element);