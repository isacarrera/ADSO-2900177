function tabla5(numero) {
    let contador = 0;
    let multiplicar = 0;
    let resultado = "";

    while (contador < 5) {
        contador = contador + 1;
        multiplicar = numero * contador;
        resultado += `${numero} x ${contador} = ${multiplicar}<br>`;
    }
    return resultado;
}

function mostrarTabla() {
    let numero = parseInt(document.getElementById("txtContar").value);
    if (isNaN(numero) || numero !== 5) {
        alert("Por favor, ingrese el número 5.");
        return false;
    }
    let resultado = tabla5(numero);
    document.getElementById("resultadoTabla").innerHTML = '<strong>' + resultado + '</strong>';
    return false;
}
