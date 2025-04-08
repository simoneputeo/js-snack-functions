/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = prompt("scrivi qualcosa", "elettroencefalogramma").toLowerCase();


// Dichiara la funzione qui.
function vowelsCounter(word) {
    let cv = 0;
    for (let i = 0; i < word.length; i++) {
        const char = word[i];
        if (char === "a" ||
            char === "e" ||
            char === "i" ||
            char === "o" ||
            char === "u") { 
                cv += 1; }
    }
    return cv;
}
// Invoca la funzione qui e stampa il risultato in console
console.log(`il numero di vocali contenute in "${word}" e' ${vowelsCounter(word)}`)

//Risultato atteso se si passa 'javascript': 3 (a, a, i)