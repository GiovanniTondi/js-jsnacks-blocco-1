/*
    Al click su un bottone, il programma genera un numero casuale tra 1 e 10. Se il numero è pari, toglie la classe pari da p#numero.pari.dispari altrimenti toglie la classe dispari.
*/

var output;
var btn = document.getElementById('btn');

btn.addEventListener("click", function() {

    var paragraph = document.getElementById('numero');

    // Riaggiungo le classi dopo la prima esecuzione
    paragraph.classList.add("pari", "dispari");

    num = Math.floor(Math.random() * 10 + 1);
    console.log(num);

    if (num % 2) {
        console.log("dispari");
        paragraph.classList.remove('dispari');
    } else {
        console.log("pari");
        paragraph.classList.remove('pari');
    }

});
