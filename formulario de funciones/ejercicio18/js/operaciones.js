//con parametro
function factorial(numero) {
    let factorial = 1;
    let contador = 0;

    while (contador < numero) {
        contador = contador + 1;
        factorial = factorial * contador;
    }

    return factorial;
}

function mostrarTabla() {
    let numero = parseInt(document.getElementById("txtContar").value);

   
    if (numero > 5) {
        alert("Por favor, ingrese un número no mayor a 5.");
        return false;
    }

    let resultado = factorial(numero);
    document.getElementById("resultadoTabla").innerHTML = '<strong>' + resultado + '</strong>'; 
    return false;
}
