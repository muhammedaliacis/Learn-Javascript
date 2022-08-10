const body = document.querySelectorAll(".card-body")[1]; 

const title = document.querySelector("#tasks-title");

// Click Evennt
//title.addEventListener("click", run);


// Double Click
//title.addEventListener("dblclick", run);

// Mouse Down same click
//title.addEventListener("mousedown", run);

//Mouse Up HOLD
//title.addEventListener("mouseup", run);


//Mouse Over
//title.addEventListener("mouseover", run);


//Mouse out
//title.addEventListener("mouseout", run);

//Mouse Enter and Mouse Leave
title.addEventListener("mouseenter", run);
title.addEventListener("mouseleave", run);

function run(e){
    console.log(e.type);
}