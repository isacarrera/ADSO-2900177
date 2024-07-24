/**
 * ejercicio de nomina 
 * 15 de mayo del 2024
 * autor: Marcos Rojas Alvarez
 */

let nomina = [];
let iteracion;
let salario=[];
let salarioM = 1300000;
let salariof;
let salud;
let dsalud;
let saludf;
let pension;
let dpension;
let pensionf;
let arl;
let darl;
let arlf;
let ddescuento;
let descuentof;
let dpagototal;
let pagototalf;
let subtransporte;
let subtransportef;


function salud1(psalud) {
    salud = 0.12;
    dsalud = psalud * salud;
    return dsalud;
}

function pension1(ppension) {
    pension = 0.16;
    dpension = ppension * pension;
    return dpension;
}

function arl1(parl) {
    arl = 0.052;
    darl = parl * arl;
    return darl;
}

function pagototal1(salariof, descuentof) {
    dpagototal = salariof - descuentof;
    return dpagototal;
}

function subtransport(salariof){
    let pago = salariof
    let salarioM = 1300000

    if(pago < salarioM*2){
        subtransporte=114000;
    }else{
        subtransporte=0;
    } 
    return subtransporte;
}

function bono(salariof){
    let pago = salariof
    let salarioM = 1300000
    

}



nomina = [
    {cc: 1080231856, nombre1: 'Jesus', nombre2: 'David', apellido1: 'Fierro', apellido2: 'Rivera', edad: 18, estrato: 2, valorDia: 50000, diasTrabajados: 20},
    {cc: 1080292211, nombre1: 'Juan', nombre2: 'Carlos', apellido1: 'Fierro', apellido2: 'Perez', edad: 17, estrato: 2, valorDia: 55000, diasTrabajados: 25},
    {cc: 10052520042, nombre1: 'Andres', nombre2: 'Felipe', apellido1: 'Trespalacios', apellido2: 'Perez', edad: 21, estrato: 3, valorDia: 45000, diasTrabajados: 30},
    {cc: 1075540543, nombre1: 'Marcos', nombre2: 'Null', apellido1: 'Rojas', apellido2: 'Alvarez', edad: 17, estrato: 2, valorDia: 50000, diasTrabajados: 30},
    {cc: 1028482557, nombre1: 'Ana', nombre2: 'Sofia', apellido1: 'Gutierrez', apellido2: 'Chinchilla', edad: 17, estrato: 3, valorDia: 40000, diasTrabajados: 15},
    {cc: 1083811108, nombre1: 'Carlos', nombre2: 'Javier', apellido1: 'Rodriguez', apellido2: 'Manchola', edad: 17, estrato: 3, valorDia: 55000, diasTrabajados: 30},
    {cc: 1138274089, nombre1: 'Daniel', nombre2: 'Null', apellido1: 'Trujillo', apellido2: 'Caicedo', edad: 18, estrato: 2, valorDia: 40000, diasTrabajados: 20},
    {cc: 1080291867, nombre1: 'Ingrid', nombre2: 'Yulissa', apellido1: 'Medina', apellido2: 'Esquivel', edad: 17, estrato: 3, valorDia: 50000, diasTrabajados: 10},
    {cc: 1080292258, nombre1: 'Milciades', nombre2: 'Null', apellido1: 'Esquivel', apellido2: 'Leal', edad: 17, estrato: 2, valorDia: 50000, diasTrabajados: 25},
    {cc: 1080291770, nombre1: 'Javier', nombre2: 'Mauricio', apellido1: 'Vargas', apellido2: 'Null', edad: 17, estrato: 2, valorDia: 35000, diasTrabajados: 30}
];

for (iteracion = 0; iteracion < nomina.length; iteracion++) {
    salariof = nomina[iteracion].valorDia * nomina[iteracion].diasTrabajados;
    saludf = salud1(salariof);
    pensionf = pension1(salariof);
    arlf = arl1(salariof);
    pagototalf = pagototal1(salariof, descuentof);
    subtransportef = subtransport(salariof);

    salario.push({
        cc: nomina[iteracion].cc,
        nombre1: nomina[iteracion].nombre1,
        nombre2: nomina[iteracion].nombre2,
        apellido1: nomina[iteracion].apellido1,
        apellido2: nomina[iteracion].apellido2,
        edad: nomina[iteracion].edad,
        estrato: nomina[iteracion].estrato,
        valorDia: nomina[iteracion].valorDia,
        diasTrabajados: nomina[iteracion].diasTrabajados,
        salariot: salariof,
        saludt: saludf,
        pensiont: pensionf,
        arlt: arlf,
        subtransportet: subtransportef,
        pagototalt: pagototalf,
        
    });
}

console.table(salario);


 



