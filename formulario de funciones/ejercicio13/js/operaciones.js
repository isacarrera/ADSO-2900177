//con parametro
function areaCua(pladoCua1,pladoCua2,pladoCua3){
    let ladoCuadrado1= pladoCua1;
    let ladoCuadrado2= pladoCua2;
    let ladoCuadrado3= pladoCua3;
    let areaCua1;
    let areaCua2;
    let areaCua3;
    let areaMayor;
    areaCua1= ladoCuadrado1*ladoCuadrado1;
    areaCua2= ladoCuadrado2*ladoCuadrado2;
    areaCua3= ladoCuadrado3*ladoCuadrado3;
    if(areaCua1>areaCua2&areaCua1>areaCua3){
        areaMayor=areaCua1;
        return areaMayor+" es el area mayor";
    }
    else{
        if(areaCua2>areaCua1&areaCua2>areaCua3){
            areaMayor=areaCua2;
            return areaMayor+" es el area mayor";
        }
        else{
            areaMayor=areaCua3;
            return areaMayor+" es el area mayor";
        }
    }
}

function calcularArea() {

    let num1 = parseFloat(document.getElementById('n1').value);
    let num2 = parseFloat(document.getElementById('n2').value);
    let num3 = parseFloat(document.getElementById('n3').value);

    let resultado = areaCua(num1, num2, num3);


    document.getElementById('resultadoArea').innerText = ` ${resultado}`;

    return false;
}
