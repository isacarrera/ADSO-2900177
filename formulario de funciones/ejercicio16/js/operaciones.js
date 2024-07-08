//con parametro
function porcentajeNotas(pnota1,pnota2,pnota3){
    let nota1 = pnota1;
    let nota2 = pnota2;
    let nota3 = pnota3;
    let sumaPorcentaje;
    porcentaje1= nota1*0.21;
    porcentaje2= nota2*0.35;
    porcentaje3= nota3*0.45;
    sumaPorcentaje = porcentaje1+porcentaje2+porcentaje3;
    if(sumaPorcentaje>4.5){
        return sumaPorcentaje+" es una exelente nota.";
    }else{
        if(sumaPorcentaje<=4.5 & sumaPorcentaje>=3.5){
            return sumaPorcentaje+" es una buena nota.";
        }else{
            if(sumaPorcentaje<=3.5 & sumaPorcentaje>=3.0){
                return sumaPorcentaje+" es una mediocre nota.";;
            }else{
                return sumaPorcentaje+" es una mala nota.";
            }
        }
    }
}
function calcularPromedio() {

    let num1 = parseFloat(document.getElementById('n1').value);
    let num2 = parseFloat(document.getElementById('n2').value);
    let num3 = parseFloat(document.getElementById('n3').value);


    let resultado = porcentajeNotas(num1, num2, num3);

    document.getElementById('resultadoPromedio').innerText = `El promedio de las notas es: ${resultado}`;


    return false;
}
