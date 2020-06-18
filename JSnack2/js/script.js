/*
    L'utente inserisce nome e cognome nei form
    e stampa la combinazione nome cognome
*/

var output;
var btn = document.getElementById('btn');


btn.addEventListener("click", function() {

    var btnValue = document.getElementById('btn').innerHTML;

    if (btnValue == "Concatena") {
        var nome = document.getElementById('name').value;

        var cognome = document.getElementById('surname').value;

        output = nome + " " + cognome;

        console.log(output);

        document.getElementById('btn').innerHTML = "Pulisci";
    } else if (btnValue == "Pulisci") {
        document.getElementById('name').value = "";
        document.getElementById('surname').value = "";

        document.getElementById('btn').innerHTML = "Concatena";
    }
});
