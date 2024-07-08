//con parametro
function mayorQue(pnumero1,pnumero2,pnumero3){
    let numero1=pnumero1;
    let numero2=pnumero2;
    let numero3=pnumero3;
    let numeroMayor;
    if(numero1>numero2&numero1>numero3){
        numeroMayor=numero1;
        return numeroMayor+" es el numero mayor";
    }
    else{
        if(numero2>numero1&numero2>numero3){
            numeroMayor=numero2;
            return numeroMayor+" es el numero mayor";
        }
        else{
            numeroMayor=numero3;
            return numeroMayor+" es el numero mayor";
        }
    }
}

function calcularMayor() {

    let num1 = parseFloat(document.getElementById('n1').value);
    let num2 = parseFloat(document.getElementById('n2').value);
    let num3 = parseFloat(document.getElementById('n3').value);


    let resultado = mayorQue(num1, num2, num3);

    document.getElementById('resultadoMayor').innerText = `El  ${resultado}`;


    return false;
}
