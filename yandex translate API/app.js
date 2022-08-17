const img = document.getElementById("outputImage");
const spann = document.getElementById("outputLanguage");
const word = document.getElementById("word").value;
const language = document.getElementById("language").value;



eventListeners();
const ui = new UI();
const translate = new Translate(word, language);

function eventListeners() {
    const val = document.getElementsByClassName("selected").textContent;
    console.log(val);

    document.getElementById("tranlate-form").addEventListener("submit", translateWorld);
    document.getElementById("language").onchange = function() {
        ui.changeUI();
    };

}


function translateWorld(e) {

    translate.translateWorld(function(err, response) {
        if (err === null) {
            ui.changeOut(response);

        } else {
            console.log(err);
        }
    });

    e.preventDefault();
}