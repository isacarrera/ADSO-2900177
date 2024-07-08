let arreglo = [];
let resultado = "";
let factorial = 1;

for(let iteracion = 1; iteracion <= 5; iteracion++) {
    factorial *= iteracion;
    arreglo.push(factorial);
}

for(let iteracion = 0; iteracion < arreglo.length; iteracion++) {
    resultado +=
    `<tr>
        <td>${arreglo[iteracion]}</td>
    </tr>`;
}

document.getElementById("arreglo-2").innerHTML = `<table>${resultado}</table>`;
