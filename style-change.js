const element = document.querySelector("#clear-todos");

console.log(element.id);
console.log(element.className);
console.log(element.classList);
console.log(element.classList[1]);
console.log(element.textContent);
console.log(element.innerHTML);
console.log(element.href);
console.log(element.style);

// Style and Element change

element.className = "btn btn-warning";
element.style.color = "red";
element.style.marginLeft = "15px";
element.href = "https://www.google.com.tr";
element.target = "_blank";
element.textContent = "Delete";
element.innerHTML = "<span>Deletee</span>";

const elements = document.querySelectorAll(".list-group-item");

elements.forEach(function(el){
    el.style.color = "blue";
    el.style.background = "black";


})

let element2 = document.querySelector("li:nth-child(3)");
element2.style.color = "red";



