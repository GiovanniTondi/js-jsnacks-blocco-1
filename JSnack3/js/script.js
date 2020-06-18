/*
    Al click su un bottone, il programma acquisisce tramite prompt un numero. Se il numero è positivo, il background di un p#colore diventa verde, se negativo rosso e se zero blu.
*/

var output;
var btn = document.getElementById('btn');

btn.addEventListener("click", function() {

    var num = parseInt(prompt("Inserisci un numero:"));
    var paragraph = document.getElementById('colore');

    if (isNaN(num)) {
        paragraph.innerHTML = "Non hai inserito un numero";
        paragraph.className = "";
    } else {
        paragraph.innerHTML = num;

        if (num > 0) {
            paragraph.className = "positivo";
        } else if (num < 0) {
            paragraph.className = "negativo";
        } else {
            paragraph.className = "neutro";
        }
    }
});
