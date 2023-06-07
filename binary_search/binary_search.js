/**
 * Realiza una búsqueda binaria en un array ordenado para encontrar el valor objetivo.
 * @param {array} array                       - El array ordenado en el que se realizará la búsqueda.
 * @param {*} targetValue                     - El valor objetivo que se desea encontrar.
 * @returns {number}                          - El índice del valor objetivo en el array, o -1 si no se encuentra.
 */
var doSearch = function(array, targetValue){
    var min = 0;
    var max = array.length - 1;
    var guess;
    var totalAttempts = 0;
    
    while(min <= max){
        guess = Math.floor((max + min)/2);
        totalAttempts++;
        
        if (array[guess] === targetValue){
            console.log('Total de intentos: ' + totalAttempts);
            return guess;
        }
        else if (array[guess] < targetValue){
            min = guess + 1;
        }
        else{
            max = guess -1;
        }
    }
    return -1;
};

var primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];

// Comprobación de resultados
var result = doSearch(primes, 73);
console.log("Found prime at index " + result);

console.log(doSearch(primes, 73), 20);

var result1 = doSearch(primes, 11);
console.log("Found prime at index " + result1);

console.log(doSearch(primes, 11),4);

var result2 = doSearch(primes, 97);
console.log("Found prime at index " + result2);

console.log(doSearch(primes, 97),24);
