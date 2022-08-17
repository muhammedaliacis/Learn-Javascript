class Currency {
    constructor(word, secondWord, val) {
        this.url = `https://v6.exchangerate-api.com/v6/ea9e627a0fbcc868515eed0d/latest/${word}`;
        this.secondWord = secondWord;
        this.val = val;
    }
    exchange() {
        var valu = this.val;
        var a = this.secondWord;
        fetch(this.url).then(function(response) {
            return response.json();
        }).then(function(data) {
            //   const parity = data["conversion_rates"]["EUR"];
            const parity = data["conversion_rates"][a];
            valu = valu * parity;
            ui.displayResult(valu);
        })
    }
}