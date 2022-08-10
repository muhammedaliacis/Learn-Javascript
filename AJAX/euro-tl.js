document.getElementById("change").addEventListener("click", change);

function change() {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", `https://v6.exchangerate-api.com/v6/ea9e627a0fbcc868515eed0d/latest/TRY`);
    xhr.onload = function() {
        if (this.status) {
            const response = JSON.parse(this.responseText);
            let euro = Number(document.querySelector("#amount").value);
            let tryy = euro / response.conversion_rates.EUR;
            document.querySelector("#tl").value = tryy.toFixed(2);
        }
    }


    xhr.send();


}