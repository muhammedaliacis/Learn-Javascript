// async function test(data) {

//		return (data);  								SAME DOWN 
// 		return new Promise(function(resolve, reject) {
//     	resolve(data);
// });
// }


// async function test(data) {
//     let promise = new Promise(function(resolve, reject) {
//         setTimeout(function() {
//             resolve("This is value.");
//         }, 5000);
//     });

//     let response = await promise; // 5 seconds wait. Only valid in a async function.

//     return response;
// }

// console.log(test("Hello"));

// async function testdata(data){
//     let promise = new Promise((function (resolve,reject){
//         setTimeout(function(){
//             if (typeof data === "string"){
//                 resolve(data);
//             }
//             else{
//                 reject(new Error("Please string value"));
//             }
//         },3000);
//     }));

//     const response = await promise;

//     return response;
// }

// testdata(2).then(function(response){
//     console.log(response);
// }).catch(function(err){
//     console.error(err);
// });

async function getCurrency(url){
    const response = await fetch(url);

    const data = await response.json();

    console.log(data);

}

getCurrency("https://v6.exchangerate-api.com/v6/ea9e627a0fbcc868515eed0d/latest/TRY");




//HTTP

class Request {
    async get(url) {
        const response = await fetch(url);

        const data = await response.json();
        return data;
    }
    async post(url, data) {
        const response = await fetch(url, {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })

        const responsedata = await response.json();
        
        return responsedata;
    }

    async put(url, data) {
        const response = await fetch(url, {
            method: "PUT",
            body: JSON.stringify(data),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        });

        data = await response.json();
        
        return data;
    }

    async delete(url) {
        const response = await fetch(url, {
            method: "DELETE"
        })
        return "Delete process success."
    }
}






const reques = new Request();

// let albums;
//  reques.get("https://jsonplaceholder.typicode.com/albums")
//      .then(function(data) {
//          albums = data;
//          console.log(albums);
//      })
//      .catch(function(reject) {
//          console.log(reject);
//      });

reques.post("https://jsonplaceholder.typicode.com/albums", { userId: 1, title: "Muhammed" }).then(function(response){
    console.log(response);
}).catch(function(err){
    console.log(err);
})
// reques.put("https://jsonplaceholder.typicode.com/albums/1", { userId: 10, title: "Muhammed Ali" });
// reques.delete("https://jsonplaceholder.typicode.com/albums/1", { userId: 10, title: "Muhammed Ali" });








