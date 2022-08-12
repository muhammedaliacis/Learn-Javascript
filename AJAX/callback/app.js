//Callback

const langs = ["python", "java","C++"];

langs.forEach(function(lang){
    console.log(lang);
});

document.getElementById("btn").addEventListener("click",function(){
    console.log("Click");
});


function process1(Callback){
    setTimeout(function(){
        console.log("Process1");
        Callback();
    }, 3000);
}

function process2(){
    setTimeout(function(){
        console.log("Process2");
    }, 2000);
}

process1(process2);  //first 1 second 2

// process1(); //third
// process2(); //second
// console.log("Helllo") //first