/*
    In un array sono contenuti i nomi degli invitati alla festa del
    grande Gatsby, chiedi all’utente il suo nome e comunicagli se
    può partecipare o no alla festa.
*/

var invitati = ["Carraway", "Gatsby", "Buchanan", "Wilson"];
var btn = document.getElementById('btn');
var messaggio = document.getElementById('messaggio');

btn.addEventListener("click", function () {
    var successo = false;
    messaggio.className = "hidden";

    var nome = document.getElementById("cognome").value;

    for (var i = 0; i < invitati.length && !successo; i++) {
        if (nome == invitati[i]) {
            successo = true;
        }
    }

    document.getElementById('jumbo').classList.add("transition");
    setTimeout(function () {
        messaggio.classList.remove("hidden");
        messaggio.classList.add("show");
    }, 1000);

    if (successo) {
        messaggio.classList.add("successo");
        messaggio.innerHTML = "Benvenuto!";
    } else {
        messaggio.classList.add("error");
        messaggio.innerHTML = "Non puoi entrare!";
    }
})
