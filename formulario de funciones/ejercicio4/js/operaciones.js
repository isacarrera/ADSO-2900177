function porNumero(pnumero){
    let numero = pnumero;
    let rnumero;

    rnumero= numero/100;
    return rnumero;
}

function calcularPorcentaje() {
    
    let num1 = parseFloat(document.getElementById('n1').value);

    let resultado = porNumero(num1);

   
    document.getElementById('resultadoPorcentaje').innerText = `El porcentaje es: ${resultado}`;

   
    return false;
}
