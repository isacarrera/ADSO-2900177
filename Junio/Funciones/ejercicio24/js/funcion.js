/**calcular el facrorial de 5 con ciclo for.
 * Autor: Isabella carrera
 * Fecha: lunes 08 de abril del 2024
 */

// Función con parámetro
function factorial(numero) {
    let factorial = 1;
    for (let contador = 1; contador <= numero; contador++) {
        factorial *= contador;
    }
    return factorial;
}

// Función con expresión
const factorialExp = function(numero) {
    let factorial = 1;
    for (let contador = 1; contador <= numero; contador++) {
        factorial *= contador;
    }
    return factorial;
};
