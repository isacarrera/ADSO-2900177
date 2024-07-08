function tabla9(numero) {
    let resultado = "";
    for (let contador = 1; contador <= 5; contador++) {
        let multiplicar = numero * contador;

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
