/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];

// Dichiara la funzione qui.
function getInitials(array) {
    const initials=[];
    for (i = 0; i < array.length; i++) {
        initials.push(array[i][0]);
    }
    return initials;
}

// Invoca la funzione qui e stampa il risultato in console
console.log(getInitials(names));


//Risultato atteso: ["A", "L", "M", "A", "G", "A"]

//funzione con arrow function e implicit return
const getInitials = (array) => array.map(name => name[0]);
