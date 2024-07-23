/**imprimir la tabla del 5 hasta el 5 con ciclo FOR.
 * Autor: Isabella carrera
 * Fecha: lunes 08 de abril del 2024
 */

//con parametro
function tabla5(numero) {
    let resultado = ""
    for (let contador = 1; contador <= 5; contador++) {
        let multiplicar = numero * contador;

        resultado += `${numero + " x " + contador + " = " + multiplicar}\n`
    }
    return resultado;
}

//con expresión
const tabla5Exp = function(numero) {
    let resultado = ""
    for (let contador = 1; contador <= 5; contador++) {
        let multiplicar = numero * contador;
        
        resultado += `${numero + " x " + contador + " = " + multiplicar}\n`
    }
    return resultado;
}
