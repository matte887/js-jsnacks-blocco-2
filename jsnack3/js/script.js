// Stampa il cubo dei primi N numeri, dove N è un numero indicato dall'utente.

// Chiedo all'utente un numero e lo trasformo subito da stringa a numero.

// Creo una variabile per il numero che l'utente inserirà
let userNumber;

// Creo un ciclo che chiederà un numero all'utente finché questi non inserirà un numero (e non una stringa).
do {
    userNumber = parseInt(prompt("Dimmi un numero."));
} while (isNaN(userNumber));

// Creo un array che conterrà tutti i risultati.
let result = [];

// Creo un contatore per il ciclo while
let counter = 1;

// Creo il ciclo while che fa l'operazione del cubo un numero di volte pari al numero inserito dall'utente...
while (counter <= userNumber) {
    // ...e pusho il risultato dentro l'array vuoto.
    result.push(`Il cubo di ${counter} è ${counter * counter * counter}`);
    // Faccio avanzare il ciclo
    counter++;
}

// Stampo il risultato
console.log(result);