let arreglo = [];
let iteracion;
let resultadoLista = "";
let numero;
let factorial = 1;

// Arreglo Inicial
arreglo = [1,2,3,4,5,6,7,8,9,10];

for(iteracion = 0; iteracion < arreglo.length; iteracion++){
    resultadoLista += `<option>${arreglo[iteracion]}</option>`;
}
4
document.getElementById("lista-numeros").innerHTML = resultadoLista;

// Arreglo Generado
arreglo = [];
for(iteracion = 0; iteracion < 20; iteracion++){
    numero = iteracion + 1;
    arreglo.push(numero);
}

resultadoLista = "";
for(iteracion = 0; iteracion < arreglo.length; iteracion++){
    resultadoLista += `<option>${arreglo[iteracion]}</option>`;
}

document.getElementById("lista-numeros-dos").innerHTML = resultadoLista;

// Arreglo de Factorial
arreglo = [];
for(iteracion = 1; iteracion < 6; iteracion++){
    factorial *= iteracion;
    arreglo.push(factorial);
}

resultadoLista = "";
for(iteracion = 0; iteracion < arreglo.length; iteracion++){
    resultadoLista += `<option>${arreglo[iteracion]}</option>`;
}

document.getElementById("lista-numeros-tres").innerHTML = resultadoLista;

