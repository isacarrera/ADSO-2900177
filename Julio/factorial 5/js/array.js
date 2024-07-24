let arreglo = [];
let resultado = "";
let factorial = 1;

for(let iteracion = 1; iteracion <= 5; iteracion++) {
    factorial *= iteracion;
    arreglo.push({numero: iteracion, factorial: factorial});
}

for(let iteracion = 0; iteracion < arreglo.length; iteracion++) {
    resultado +=
    `<tr>
        <td>${arreglo[iteracion].numero}</td>
        <td>${arreglo[iteracion].factorial}</td>
    </tr>`;
}

document.getElementById("arreglo-2").innerHTML = resultado;
