function tabla5(numero) {
    let resultado = "";
    for (let contador = 1; contador <= 5; contador++) {
        let multiplicar = numero * contador;
        resultado += `${numero} x ${contador} = ${multiplicar}<br>`;
    }
    return resultado;
}

function mostrarTabla() {
    let numero = parseInt(document.getElementById("txtContar").value);
    
    // Validación para asegurar que solo se procese el número 5
    if (numero !== 5) {
        alert("Por favor, ingrese el número 5.");
        return false;
    }

    let resultado = tabla5(numero);
    document.getElementById("resultadoTabla").innerHTML = '<strong>' + resultado + '</strong>'; 
    return false;
}
