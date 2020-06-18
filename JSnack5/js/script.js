/*
    Nella pagina ci sono due input(num1, num2) e una select con options(somma,sottrai,moltiplica,dividi).
    Al click su un bottone, il programma inserisce in un p#result il risultato dell'operazione scelta.
    N.B. trascura pure i controlli!
*/

var output;
var btn = document.getElementById('btn');

btn.addEventListener("click", function() {

    var paragraph = document.getElementById('result');
    var num1 = parseInt(document.getElementById('num1').value);
    var num2 = parseInt(document.getElementById('num2').value);
    var operazione = document.getElementById('operazione').value;

    if (operazione == "somma") {
        output = num1 + num2;
    } else if (operazione == "sottrai") {
        output = num1 - num2;
    } else if (operazione == "moltiplica") {
        output = num1 * num2;
    } else if (operazione == "dividi") {
        if (num2 == 0) {
            output = "Non puoi dividere per 0!";
        } else {
            output = num1 / num2;
        }
    }

    paragraph.innerHTML = output;

});
