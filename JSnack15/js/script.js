/*
    Calcola la somma e la media dei primi 10 num
*/


var soglia = 10;
var somma = 0;
for (var i = 0; i < soglia; i++) {
    somma += parseInt(prompt("Inserisci un numero:"));
}

var media = somma / soglia;

console.log("Somma:", somma);
console.log("Media:", media);
