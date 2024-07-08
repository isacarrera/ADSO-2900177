//con parametro
function calcularEdad(pnacimiento){
    let Anacimiento=pnacimiento;
    let edad;
    edad= 2024-Anacimiento;
    if(edad>17){
        return "Mayor de edad con "+edad;
    }else{
        return "Menor de edad con "+edad;
    }
}

function calcularEdadMayor() {

    let num1 = parseFloat(document.getElementById('n1').value);



    let resultado = calcularEdad(num1);

    document.getElementById('resultadoEdad').innerText = `Es ${resultado}`;


    return false;
}
