// Il software deve chiedere per 5 volte all'utente di inserire un numero.
// Il programma stampa la somma di tutti i numeri inseriti.
// Esegui questo programma in due versioni, con il for e con il while.

// Dichiaro la variabile per la somma.
let sum = 0;

// Creo una variabile che fungerà da contatore per il ciclo while
let counter = 0;

// Chiedo all'utente un numero per 5 volte...
while (counter < 5) {
    const userNumber = parseInt(prompt(`Inserisci un numero e premi invio (${counter+1}/5)`));
    // Controllo che l'utente abbia inserito un numero
    if (isNaN (userNumber)) {
        console.log("Devi inserire un numero");
    } else {
        // ...e aggiungo quel numero alla variabile sum.
        sum += userNumber;
        // Aumento il counter per mandare avanti il ciclo
        counter++
    }
} 

// Stampo il risultato in console
console.log(sum);