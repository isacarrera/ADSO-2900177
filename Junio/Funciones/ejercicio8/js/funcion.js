/**Función Sueldo - Calcular el sueldo de un trabajador con deducciones
 *  de pensión, salud y ARL. (pensión = 0.16, salud = 0.12, ARL = 0.052)
 * Autor: Esteban Palomar Murcia
 * Fecha: lunes 08 de abril del 2024
 */

//con parametro
function sueldo(pdiasT,pvalorD){
    let diasT = pdiasT;
    let valorD = pvalorD;
    let sueldo;
    sueldo = valorD*diasT;
    return sueldo;

}

function pension(psueldo){
    let pension;
    pension = psueldo*0.16
    return pension
}

function salud(psueldo){
    let salud;
    salud= psueldo*0.12;
    return salud
}

function arl(psueldo){
    let arl;
    arl = psueldo*0.052
    return arl
}

function sueldoTotal(){
    let sueldoInical = sueldo(pdiasT,pvalorD);
    let pensionTotal = pension(sueldoInical);
    let saludTotal = salud(sueldoInical);
    let arlTotal = arl(sueldoInical);
    let deducibles = pensionTotal+saludTotal+arlTotal;
    let sueldoFinal = sueldoInical-deducibles;
    return sueldoFinal
}

//con Expresión
const sueldoExp= function(pdiasT,pvalorD){
    let diasT = pdiasT;
    let valorD = pvalorD;
    let sueldo;
    sueldo = valorD*diasT;
    return sueldo;

}

const pensionExp= function(psueldo){
    let pension;
    pension = psueldo*0.16
    return pension
}

const saludExp= function(psueldo){
    let salud;
    salud= psueldo*0.12;
    return salud
}

const arlExp= function(psueldo){
    let arl;
    arl = psueldo*0.052
    return arl
}

const sueldoTotalExp= function(){
    let sueldoInical = sueldo(pdiasTExp,pvalorDExp);
    let pensionTotal = pension(sueldoInical);
    let saludTotal = salud(sueldoInical);
    let arlTotal = arl(sueldoInical);
    let deducibles = pensionTotal+saludTotal+arlTotal;
    let sueldoFinal = sueldoInical-deducibles;
    return sueldoFinal
}