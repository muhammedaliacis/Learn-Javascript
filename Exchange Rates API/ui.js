function UI() {
    this.firstOutput = document.getElementById("outputFirst");
    this.secondOutput = document.getElementById("outputSecond");

    this.firstCurrency = document.getElementById("firstCurrency");
    this.secondCurrency = document.getElementById("secondCurrency");
    this.result = document.getElementById("outputResult");

}

UI.prototype.changeOption = function() {
    let i = this.firstCurrency.options.selectedIndex;
    let a = this.secondCurrency.options.selectedIndex;

    this.firstOutput.textContent = this.firstCurrency.options[i].textContent;
    this.secondOutput.textContent = this.secondCurrency.options[a].textContent;

}

UI.prototype.displayResult = function(valu) {
    this.result.value = valu;
}