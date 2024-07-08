function Contar(numero) {
    let contador = 0;
    let resultado = "";
    while (contador < numero) {
        contador++;
        resultado += `${contador}<br>`;
    }
    return resultado;
}

function mostrarTabla() {
    let numero = parseInt(document.getElementById("txtContar").value);

   
    if (numero > 5) {
        alert("Por favor, ingrese un número entre 1 y 5.");
        return false;
    }

    let resultado = Contar(numero);
    document.getElementById("resultadoTabla").innerHTML = '<strong>' + resultado + '</strong>';
    return false;
}
