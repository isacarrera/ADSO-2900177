//con parametro
let edadUno;
let edadDos;
let edadTres;
function calcularEdad1(pnacimiento){
    let Anacimiento=pnacimiento;
    edadUno= 2024-Anacimiento;
    if(edadUno>17){
        return "La primera persona Es Mayor de edad con "+edadUno;
    }else{
        return "La primera persona Es Menor de edad con "+edadUno;
    }
}
function calcularEdad2(pnacimiento){
    let Anacimiento=pnacimiento;
    edadDos= 2024-Anacimiento;
    if(edadDos>17){
        return "La segunda persona Es Mayor de edad con "+edadDos;
    }else{
        return "La segunda persona Es Menor de edad con "+edadDos;
    }
}
function calcularEdad3(pnacimiento){
    let Anacimiento=pnacimiento;
    edadTres= 2024-Anacimiento;
    if(edadTres>17){
        return "La tercera persona Es Mayor de edad con "+edadTres;
    }else{
        return "La tercera persona Es Menor de edad con "+edadTres;
    }
}
function promedioEdad(){
    let promedio = (edadUno+edadDos+edadTres)/3;
    if(promedio>17){
        return "El promedio de las edades cumplen la mayoria de edad con: "+promedio+" años";
    }else{
        return "El promedio de las edades no cumplen con la mayoria de edad con: "+promedio+" años";
    }
}

function calcularEdad() {
    let num1 = parseInt(document.getElementById('n1').value);
    let num2 = parseInt(document.getElementById('n2').value);
    let num3 = parseInt(document.getElementById('n3').value);

    let resultado = calcularEdad1(num1);
    let resultado2 = calcularEdad2(num2);
    let resultado3 = calcularEdad3(num3);
    let promedio = promedioEdad();

    document.getElementById('calcularEdad1').innerText = resultado;
    document.getElementById('calcularEdad2').innerText = resultado2;
    document.getElementById('calcularEdad3').innerText = resultado3;
    document.getElementById('promedioEdad').innerText = promedio;

    return false;
}
