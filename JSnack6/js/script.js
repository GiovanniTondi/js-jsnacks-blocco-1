/*
    Nella pagina c'è un bottone#lanciaMoneta.
    Al click su un bottone, il programma genera un numero casuale (tra 0 e 9).
    Se il numero è pari mostra un img con la testa della moneta.
    Se è dispari mostra un'altra img con la croce della moneta.
*/

// DOM
var btn = document.getElementById('lanciaMoneta');
var btnRisultati = document.getElementById('btnRisultati');
var image = document.getElementById("image");

var moneta;
var valore;
var primoLancio = true;

btn.addEventListener("click", function() {

    num = Math.floor(Math.random() * 10);
    console.log(num);

    if (!(num % 2)) {
        moneta = "testa";
    } else {
        moneta = "croce";
    }

    valore = document.getElementById(moneta).innerHTML;
    valore++;
    image.src = "img/" + moneta + ".png";
    document.getElementById(moneta).innerHTML = valore;

    if (primoLancio) {
        primoLancio = false;
        btn.innerHTML = "Lancia ancora!";
        document.getElementById('table').classList.remove("hidden");
    }
});
