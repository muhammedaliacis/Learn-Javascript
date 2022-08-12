// function getData(data) {
//     return new Promise(function(resolve, reject) {
//         setTimeout(function() {
//             reject("Olumlu");
//         }, 4000);
//     });
// }

// getData("Hello").then(function(response) {  //not error
//     console.log(response);
// });

// getData("Hello").catch(function(err) { //error
//     console.log(err);
// });

// function getData(data) {
//     return new Promise(function(resolve, reject) {
//         setTimeout(function() {
//             if (typeof data === "string") {
//                 resolve(data);
//             } else {
//                 reject(new Error("Please string value"));
//             }
//         }, 4000);
//     });
// }
// getData(2).then(function(response) { //not error
//     console.log(response);
// }).catch(function(err) { //error
//     console.log(err);
// });


// //S6+

// getData(2).then(response => console.log(response)
//     .catch(err =>
//         console.error(err)));


function addTwo(number) {
    return new Promise((resolve, reject) => {
        setTimeout(function() {
            if (typeof number === "number") {
                resolve(number + 2);
            } else  {
                reject(new Error("False value"));
            }
        }, 2000);
    });
}

addTwo(10).then(function(response) {
    console.log(response);
    return response + 2;
}).then(function(response2) {
    console.log(response2);
}).catch(function(reject) {
    console.error(reject);
});

// 1 catch sonsuz then- Promise Chain