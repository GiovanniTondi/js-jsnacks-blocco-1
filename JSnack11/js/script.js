/*
    Crea un array vuoto.
    Chiedi all'utente per 6 volte un numero,
    se è dispari inseriscilo nell'array
*/

var dispari = [];
var volte = 6;
var j = 0;
for (var i = 0; i < volte; i++) {
    var num = parseInt(prompt("Inserisci un numero"));
    if (num%2) {
        dispari[j] = num;
        j++;
    }
}
console.log(dispari);
