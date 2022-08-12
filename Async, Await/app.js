// async function test(data) {

//		return (data);  								SAME DOWN 
// 		return new Promise(function(resolve, reject) {
//     	resolve(data);
// });
// }


async function test(data) {
    let promise = new Promise(function(resolve, reject) {
        setTimeout(function() {
            resolve("This is value.");
        }, 5000);
    });

    let response = await promise; // 5 seconds wait. Only valid in a async function.

    return response;
}

console.log(test("Hello"));