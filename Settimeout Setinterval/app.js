//Set timeout

setTimeout(function(){
    console.log("Hello");
}, 2000);  // after 2 seconds will function


//SetInterval
let i = 0;
let value = setInterval(function(){
    i++;
    console.log("number: ", i)
},1000);
document.getElementById("btn").addEventListener("click", function(){
    clearInterval(value);
})

//Clear Interval

