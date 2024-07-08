function factorial(numero) {
    let factorial = 1;
    for (let contador = 1; contador <= numero; contador++) {
        factorial *= contador;
    }
    return factorial;
}

function mostrarTabla() {
    let numero = parseInt(document.getElementById("txtContar").value);
    

    if (numero !== 5) {
        alert("Por favor, ingrese el número 5.");
        return false;
    }

    let resultado = factorial(numero);
    document.getElementById("resultadoTabla").innerHTML = '<strong>' + resultado + '</strong>'; 
    return false;
}
