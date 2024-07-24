function porNota(pnota, pporce){
    let nota = pnota;
    let porce = pporce;
    let rnota;

    rnota= nota*porce;
    return rnota;
}

function calcularPorcentaje() {
    
    let num1 = parseFloat(document.getElementById('n1').value);
    let num2= parseFloat(document.getElementById('n2').value);
    let num3 = parseFloat(document.getElementById('n3').value);

    let resultado = porNota(num1, num2, num3);

   
    document.getElementById('resultadoPorcentaje').innerText = `El porcentaje es: ${resultado}`;

   
    return false;
}
