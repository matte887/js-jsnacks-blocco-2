// Stampa il cubo dei primi N numeri, dove N è un numero indicato dall'utente.

// Creo una variabile per il numero che l'utente inserirà
let userNumber;

// Creo un ciclo che chiederà un numero all'utente finché questi non inserirà un numero (e non una stringa).
do {
    userNumber = parseInt(prompt("Dimmi un numero."));
} while (isNaN(userNumber) || userNumber < 1);

// Creo un array che conterrà tutti i risultati.
let result = [];

// Creo il ciclo while che fa l'operazione del cubo un numero di volte pari al numero inserito dall'utente...
for (let i = 1; i <= userNumber; i++) {
    // ...e pusho il risultato dentro l'array vuoto.
    result.push(`Il cubo di ${i} è ${i * i * i}`);
}

console.log(result);