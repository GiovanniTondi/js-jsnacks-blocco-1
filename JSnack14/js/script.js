/*
    Chiedi un numero di 4 cifre all’utente e calcola la somma
    di tutte le cifre che compongono il numero.
*/

var num = prompt("Inserisci un numero di 4 cifre");

var somma = 0;
for (var i = 0; i < num.length; i++) {
    somma += parseInt(num[i]);
}
console.log(somma);
