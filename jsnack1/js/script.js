// Il software deve chiedere per 5 volte all'utente di inserire un numero.
// Il programma stampa la somma di tutti i numeri inseriti.
// Esegui questo programma in due versioni, con il for e con il while.

// Dichiaro la variabile per la somma.
let sum = 0;

// Chiedo all'utente un numero per 5 volte...
for (let i = 0; i < 5; i++) {
    // ...e aggiungo quel numero alla variabile sum.
    sum += parseInt(prompt("Dimmi un numero"));
}

// Stampo il risultato in console
console.log(sum);