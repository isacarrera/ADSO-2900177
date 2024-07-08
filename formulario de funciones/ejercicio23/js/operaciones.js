function contar(numero) {
    let resultado = "";
    for (let contador = 1; contador <= numero; contador++) {
        resultado += `${contador}<br>`;
    }
    return resultado;
}

function mostrarTabla() {
    let numero = parseInt(document.getElementById("txtContar").value);

    if (numero < 1 || numero > 5) {
        alert("Por favor, ingrese un número entre 1 y 5.");
        return false;
    }

    let resultado = contar(numero);
    document.getElementById("resultadoTabla").innerHTML = '<strong>' + resultado + '</strong>'; 
    return false;
}
