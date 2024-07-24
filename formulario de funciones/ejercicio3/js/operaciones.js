let numeroUno;
let numeroDos;


function suma(pnumeroUno, pnumeroDos){
    numUno = pnumeroUno;
    numDos = pnumeroDos;
    let sumar = numUno + numDos;
    return sumar;
}

function calcularSuma() {
    
    let num1 = parseFloat(document.getElementById('n1').value);
    let num2 = parseFloat(document.getElementById('n2').value);

    
    let resultado = suma(num1, num2);

    document.getElementById('resultadoSuma').innerText = `Resultado de la suma es: ${resultado}`;

    return false;
}
