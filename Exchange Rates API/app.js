const firsttCurrency = document.getElementById("firstCurrency");
const seconddCurrency = document.getElementById("secondCurrency");

addEvents();


const ui = new UI();

function addEvents() {
    document.getElementById("amount").addEventListener("keyup", takeValue);
    document.getElementById("firstCurrency").onchange = function() {
        ui.changeOption();
    }
    document.getElementById("secondCurrency").onchange = function() {
        ui.changeOption();
    }
}


function takeValue(e) {
    let val = document.getElementById("amount").value;
    translate(val);
}

function translate(val) {
    let i = firsttCurrency.options.selectedIndex;
    let a = seconddCurrency.options.selectedIndex;

    const currency = new Currency(firsttCurrency.options[i].textContent, seconddCurrency.options[a].textContent, val);
    currency.exchange();
}