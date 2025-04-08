/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito (es. "Ciao [nome]") */

const userName = 'Mario';
const greeting = 'ciao';

// Dichiara la funzione qui.

function saluto(nome){

// Invoca la funzione qui e stampa il risultato in console
return `${greeting} ${nome}`
}


//Risultato atteso se si passa 'Mario': // ciao Mario
console.log(saluto(userName));

//funzione con arrow function e implicit return
const saluto = (nome) => `${greeting} ${nome}`;