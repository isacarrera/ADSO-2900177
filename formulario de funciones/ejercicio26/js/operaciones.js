function tablas(tabla) {
    let contador = 1;
    let par = 0;
    let impar = 0;
    let resultado = "";


    while (contador <= tabla) {
        let multiplicar = 1;
        while (multiplicar <= 5) {
            let res = contador * multiplicar;

            if (res % 2 === 0) {
                par++;
                resultado += `${contador} x ${multiplicar} = ${res} Buzz.\n`;
            } else {
                impar++;
                resultado += `${contador} x ${multiplicar} = ${res} Bass.\n`;
            }

            multiplicar++;
        }
        contador++;
    }

    return `${resultado}\nLa cantidad de pares es: ${par}\nLa cantidad de impares es: ${impar}\n`;
}

function mostrarTabla() {
    let numero = parseInt(document.getElementById("txtContar").value);
    if (numero < 1 || numero > 5) {
        alert("Por favor, ingrese un número entre 1 y 5.");
        return false;
    }
    let resultado = tablas(numero);
    document.getElementById("resultadoTabla").innerHTML = '<strong>' + resultado.replace(/\n/g, "<br>") + '</strong>'; 
    return false;
}
