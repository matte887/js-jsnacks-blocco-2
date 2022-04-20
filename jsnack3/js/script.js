// Stampa il cubo dei primi N numeri, dove N è un numero indicato dall'utente.

// Chiedo all'utente un numero e lo trasformo subito da stringa a numero.
const userNumber = parseInt(prompt("Dimmi un numero."));

// Creo un array che conterrà tutti i risultati.
let result = [];

// Creo un contatore per il ciclo while
let counter = 1;

while (counter <= userNumber) {
    result.push(counter * counter * counter);
    counter++;
}

console.log(result);
