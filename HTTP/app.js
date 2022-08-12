//Ajax callback hhtp request

class Request {
    constructor() {
        this.xhr = new XMLHttpRequest();
    }

    // Get Request

    get(url, callback) {
        this.xhr.open("GET", url);

        this.xhr.onload = function() {
            if (this.status === 200) {
                callback(null, this.responseText);
            } else {
                callback("Error", null)
            }
        }

        this.xhr.send();
    }

    post(url, data, callback) {
        this.xhr.open("POST", url);

        this.xhr.setRequestHeader("Content-type", "application/json"); // JSON verisi

        this.xhr.onload = function() {
            if (this.status === 201) {
                //Success
                callback(null, this.responseText);
            } else  {
                callback("Error", null);
            }
        }
        this.xhr.send(JSON.stringify(data));
    }

    put(url, data, callback) {
        this.xhr.open("PUT", url);

        this.xhr.setRequestHeader("Content-type", "application/json"); // JSON verisi

        this.xhr.onload = function() {
            if (this.status === 200) {
                //Success
                callback(null, this.responseText);
            } else  {
                callback("Error", null);
            }
        }
        this.xhr.send(JSON.stringify(data));
    }

    delete(url, callback) {
        this.xhr.open("DELETE", url);


        this.xhr.onload = function() {
            if (this.status === 200) {
                //Success
                callback(null, "success");
            } else  {
                callback("Error", null);
            }
        }
        this.xhr.send();
    }
}

const request = new Request();

// request.get("https://jsonplaceholder.typicode.com/albums", function(err, response) {
//     if (err === null) {
//         console.log(response);
//     } else {
//         console.log(err);
//     }
// });

// request.post("https://jsonplaceholder.typicode.com/albums", { userID: 2, title: "Thriller" }, function(err, response) {
//     if (err === null) {
//         console.log(response);
//     } else {
//         console.log(err);
//     }
// })

// request.put("https://jsonplaceholder.typicode.com/albums/30", { userID: 2, title: "Muhammed" }, function(err, response) {
//     if (err === null) {
//         console.log(response);
//     } else {
//         console.log(err);
//     }
// })

request.delete("https://jsonplaceholder.typicode.com/albums/30", function(err, response) {
    if (err === null) {
        console.log(response);
    } else {
        console.log(err);
    }
})