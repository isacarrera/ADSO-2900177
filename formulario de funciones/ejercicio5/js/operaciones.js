function proNota(pnota1, pnota2, pnota3){
    let nota1 = pnota1;
    let nota2 = pnota2;
    let nota3 = pnota3;
    let promedio;

    promedio= (nota1+nota2+nota3)/3;
    return promedio;
}


function calcularPromedio() {

    let num1 = parseFloat(document.getElementById('n1').value);
    let num2 = parseFloat(document.getElementById('n2').value);
    let num3 = parseFloat(document.getElementById('n3').value);


    let resultado = proNota(num1, num2, num3);

    document.getElementById('resultadoPromedio').innerText = `El promedio de las notas es: ${resultado}`;


    return false;
}
