/*
    Il software deve chiedere per 5 volte all’utente di inserire un
    numero. Il programma stampa la somma di tutti i numeri
    inseriti. Esegui questo programma in due versioni, con il for
    e con il while.
*/
var somma = 0;

// // FOR
// for (var i = 0; i < 5; i++) {
//     somma += parseInt(prompt("Inserisci un numero"));
// }


// WHILE
var i = 0;
while (i < 5) {
    somma += parseInt(prompt("Inserisci un numero"));
    i++;
}



// output
console.log("La somma è:",somma);
