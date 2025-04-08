/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];
const input = prompt("Inserisci una lettera", "A");

// Dichiara la funzione qui.
function filter(namesList, initial) {
    const namesStartedWith = [];
    for (let i = 0; i < namesList.length; i++) { 
        const name = namesList[i]; 
        if (name[0] === initial) {
            namesStartedWith.push(name);
        }
    }
    return namesStartedWith;
}

// Invoca la funzione qui e stampa il risultato in console
const result = filter(names, input);
console.log(result);

//funzione con arrow function e implicit return
const filter = (namesList, initial) => namesList.filter(name => name[0] === initial);
