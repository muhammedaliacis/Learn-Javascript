function Translate(word, language) {
    this.apikey = "api";
    this.word = word;
    this.language = language;

    this.xhr = new XMLHttpRequest();


}

Translate.prototype.translateWorld = function(callback) {
    const endpoint = "api";

    this.xhr.open("GET", endpoint);
    this.xhr.onload = function() {
        if (this.status === 200) {
            callback(null, JSON.parse(this.xhr.responseText).text[0]);
        } else {
            callback("Error", null);
        }
    }

    this.xhr.send();

}