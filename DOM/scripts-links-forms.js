let value;

//Scripts

value = document.scripts;
value = document.scripts.length;

//Links

value = document.links;
value = document.links[0];
value = document.links[0].getAttribute("class");
value = document.links[0].getAttribute("href");
value = document.links[0].className;
value = document.links[0].classList;

//Forms

value = document.forms;

value = document.getElementById("idname");
value = document.getElementsByClassName("classname");
value = document.getElementsByTagName("div");
value = document.querySelector(".class");
value = document.querySelector("#idname");
value = document.querySelector("element");  //first element
value = document.querySelectorAll("element");  // all element
element.forEach(function(el){
    console.log(el);
});







console.log(value);