/*
    L’utente inserisce due parole in successione, con due
    prompt. Il software stampa prima la parola più corta, poi la
    parola più lunga.
*/

var str1 = prompt("Inserisci la prima parola");
var str2 = prompt("Inserisci la seconda parola");

if (str1.length < str2.length) {
    console.log(str1);
    console.log(str2);
} else if (str2.length < str1.length) {
    console.log(str2);
    console.log(str1);
} else {
    console.log("Hanno la stessa lunghezza");
}
