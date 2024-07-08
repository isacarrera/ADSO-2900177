//con parametro
function mayorQue(pnumero1,pnumero2){
    let numero1=pnumero1;
    let numero2=pnumero2;
    let numeroMayor;
    if(numero1==numero2){
        return "Los numeros "+numero1+" y "+numero2+" son iguales"
    }else{
        if(numero1>numero2){
            numeroMayor=numero1;
            return numeroMayor+" es el numero mayor";
        }else{
            numeroMayor=numero2;
            return numeroMayor+" es el numero mayor";
        }
    }
}
function calcularMayor() {
    
    let num1 = parseFloat(document.getElementById('n1').value);
    let num2 = parseFloat(document.getElementById('n2').value);

    
    let resultado = mayorQue(num1, num2);

    document.getElementById('resultadoMayor').innerText = `  ${resultado}`;

    return false;
}
