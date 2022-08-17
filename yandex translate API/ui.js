function UI() {
    this.outputImage = document.getElementById("outputImage");
    this.outputLanguage = document.getElementById("outputLanguage");
    this.outputWord = document.getElementById("outputWord");


    this.languagelist = document.getElementById("language");

}

UI.prototype.changeUI = function() {
    this.outputImage.src = `images/${this.languagelist.value}.png`
    if (this.languagelist.options.selectedIndex === 0) {
        this.outputLanguage.textContent = "İngilizce";
    } else if (this.languagelist.options.selectedIndex === 1) {
        this.outputLanguage.textContent = "Almanca";
    } else {
        this.outputLanguage.textContent = "İspanyolca";

    }
}

UI.prototype.changeOut = function(response) {
    this.outputWord.textContent = response;
}