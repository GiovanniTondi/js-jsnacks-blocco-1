/*
    L'utente inserisce due numeri in successione e viene
    stampato il più grande
*/

var output;

var n1 = parseInt(prompt("Inserisci il primo numero:"));

var n2 = parseInt(prompt("Inserisci il secondo numero:"));

if (n1 > n2) {
    output = "Il numero più grande è " + n1;
} else if (n1 < n2) {
    output = "Il numero più grande è " + n2;
} else {
    output = "I numeri sono uguali";
}

document.getElementById('out').innerHTML = output;
