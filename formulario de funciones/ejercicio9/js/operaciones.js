function mayorQue(pnumero1,pnumero2){
    let numero1=pnumero1;
    let numero2=pnumero2;
    let numeroMayor;
    if(numero1>numero2){
        numeroMayor=numero1;
        return numeroMayor;
    }else{
        numeroMayor=numero2;
        return numeroMayor;
    }
}

function calcularSuma() {
    
    let num1 = parseFloat(document.getElementById('n1').value);
    let num2 = parseFloat(document.getElementById('n2').value);

    
    let resultado = mayorQue(num1, num2);

    document.getElementById('resultadoSuma').innerText = `El numero mayor es: ${resultado}`;

    return false;
}
