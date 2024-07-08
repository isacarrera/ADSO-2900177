function tabla9(numero) {
    let contador = 0;
    let multiplicar = 0;
    let resultado = "";

    while (contador < 5) {
        contador = contador + 1;
        multiplicar = numero * contador;

        if (multiplicar % 2 === 0) {
            resultado += `${numero} x ${contador} = ${multiplicar} es par.<br>`;
        } else {
            resultado += `${numero} x ${contador} = ${multiplicar} es impar.<br>`;
        }
    }
    return resultado;
}

function mostrarTabla() {
    let numero = parseInt(document.getElementById("txtContar").value);

    if (numero !== 9) {
        alert("Por favor, ingrese el número 9.");
        return false;
    }

    let resultado = tabla9(numero);
    document.getElementById("resultadoTabla").innerHTML = '<strong>' + resultado + '</strong>'; 
    return false;
}
