// Generatore di "nomi cognomi" casuali: prendendo una lista di nomi e una
// lista di cognomi, Gatsby vuole generare una falsa lista di 3 invitati.

// Creo due array contenenti x nomi ed x cognomi
const namesContainer = ["Francesca", "Eleonora", "Maria", "Franco", "Giuseppe", "Carlo"];
const lastNamesContainer= ["Bianchi", "Rossi", "Neri", "Gialli", "Verdi", "Azzurri"];

// Creo un array vuoto che conterrà i 3 nomi casuali
const randomNames = [];

// Creo un ciclo che per 3 volte eseguirà l'operazione necessaria
for (let i = 0; i < 3; i++) {
    const thisRandomName = `${namesContainer[Math.floor(Math.random() * namesContainer.length)]} ${lastNamesContainer[Math.floor(Math.random() * lastNamesContainer.length)]}`;
    randomNames.push(thisRandomName);    
}

// Stampo il risultato
console.log(randomNames);