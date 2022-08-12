function getTextFile() { //Text file

    fetch("example.txt").then(function(response) {

        return response.text();
    }).then(function(data) {
        console.log(data);
    }).catch(function(err) {
        console.error(err);
    })
}

function getJsonFile() { //Json file
    fetch("example.json").then(function(response) {
        return response.json();
    }).then(function(data) {
        console.log(data);
    }).catch(function(err) {
        console.log(err);
    })
}

function getExternalAPI() {
    fetch("https://v6.exchangerate-api.com/v6/ea9e627a0fbcc868515eed0d/latest/TRY").then(function(response) {
        return response.json();
    }).then(function(data) {
        console.log(data.conversion_rates);
    }).catch(function(err) {
        console.log(err);
    })
}
getExternalAPI()
    // getJsonFile();
    // getTextFile();