class Request  {
    get(url) {
        return new Promise(function(resolve, reject) {
            fetch(url)
                .then(function(response) {
                    return response.json();
                })
                .then(function(data) {
                    resolve(data);

                }).catch(function(err) {
                    reject("err");
                })

        })

    }
    post(url, data) {
        fetch(url, {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        }).then(function(response) {
            return response.json();
        }).then(function(data) {
            console.log(data);
        }).catch(function(err) {
            console.log("err");
        })
    }

    put(url, data) {
        fetch(url, {
            method: "PUT",
            body: JSON.stringify(data),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        }).then(function(response) {
            return response.json();
        }).then(function(data) {
            console.log(data);
        }).catch(function(err) {
            console.log("err");
        })
    }

    delete(url) {
        fetch(url, {
            method: "DELETE"
        }).then(function(response) {
            console.log("Success");
        }).catch(function(err) {
            console.log("err");
        })
    }
}






const reques = new Request();


reques.post("https://jsonplaceholder.typicode.com/albums", { userId: 1, title: "Muhammed" });
reques.put("https://jsonplaceholder.typicode.com/albums/1", { userId: 10, title: "Muhammed Ali" });
reques.delete("https://jsonplaceholder.typicode.com/albums/1", { userId: 10, title: "Muhammed Ali" });








// let albums;
// reques.get("https://jsonplaceholder.typicode.com/albumqs")
//     .then(function(data) {
//         albums = data;
//         console.log(albums);
//     })
//     .catch(function(reject) {
//         console.log(reject);
//     });