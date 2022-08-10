const filter = document.getElementById("filter");

document.addEventListener("DOMContentLoaded", load);

function load(e){
    console.log("Load page.");
}

// Focus 
filter.addEventListener("focus", run);

// Blur
filter.addEventListener("blur", run);

// Paste  and Copy and Cut
filter.addEventListener("paste", run);
filter.addEventListener("copy", run);
filter.addEventListener("cut", run);


// Select
filter.addEventListener("select", run);

function run(e){
    console.log(e.type);
}