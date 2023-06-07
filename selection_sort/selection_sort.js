/**
 * Intercambia dos elementos en un arreglo.
 *
 * @param {Array} array                                 - El arreglo en el que se realizará el intercambio.
 * @param {number} firstIndex                           - El índice del primer elemento a intercambiar.
 * @param {number} secondIndex                          - El índice del segundo elemento a intercambiar.
 */
var swap = function(array, firstIndex, secondIndex) {
    var temp = array[firstIndex];
    array[firstIndex] = array[secondIndex];
    array[secondIndex] = temp;
};

/**
 * Encuentra el índice del valor mínimo en un arreglo a partir de un índice de inicio.
 *
 * @param {Array} array                                 - El arreglo en el que buscar el valor mínimo.
 * @param {number} startIndex                           - El índice de inicio para buscar el valor mínimo.
 * @returns {number}                                    - El índice del valor mínimo en el arreglo.
 */
var indexOfMinimum = function(array, startIndex) {

    var minValue = array[startIndex];
    var minIndex = startIndex;

    for(var i = minIndex + 1; i < array.length; i++) {
        if(array[i] < minValue) {
            minIndex = i;
            minValue = array[i];
        }
    } 
    return minIndex;
}; 

/**
 * Ordena un arreglo en orden ascendente utilizando el algoritmo de selección.
 *
 * @param {Array} array                                  - El arreglo que se va a ordenar.
 */
var selectionSort = function(array) {
    var arrayLength = array.length;

    for (var i = 0; i < arrayLength - 1; i++) {
        var minIndex = indexOfMinimum(array, i);
        swap(array, i, minIndex);
    }
};

// Ejemplos de uso
var array = [22, 11, 99, 88, 9, 7, 42];
selectionSort(array);
console.log("Array after sorting:  " + array);

console.log(array);                                      // [7, 9, 11, 22, 42, 88, 99]);

var array = [22, 11, 99, -5, 0, -3, 42];
selectionSort(array);
console.log("Array after sorting:  " + array);

console.log(array);                                      // [-5, -3, 0, 11, 22, 42, 99]);