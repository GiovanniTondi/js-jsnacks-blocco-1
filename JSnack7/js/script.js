/*
    L'utente inserisce due numerim, il software stampa il maggiore
*/

var num1 = parseInt(prompt("Inserisci il primo numero"));
var num2 = parseInt(prompt("Inserisci il secondo numero"));

if (num1 > num2) {
    console.log(num1, "è più grande");
} else if (num2 > num1) {
    console.log(num2, "è il più grande");
} else {
    console.log("sono uguali");
}
