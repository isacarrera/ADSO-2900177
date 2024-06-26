/**realizar un programa que calcule el pago de un empleado teniendo en cuanta unos factores
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
function salud(psueldo){
    let salud;
    salud= psueldo*0.12;
    return salud
}
function pension(psueldo){
    let pension;
    pension = psueldo*0.16
    return pension
}
function arl(psueldo){
    let arl;
    arl = psueldo*0.052
    return arl
}
function transporte(sueldo){
    let transporteT;
    let salarioMinimo = 1300000;
    if(sueldo<=salarioMinimo){
        transporteT= 114000;
        return transporteT;
    }else{
        transporteT= 0;
        return transporteT;
    }
}
function retencion(sueldo) {
    let retencionT;
    let salarioMinimo = 1300000;
    if (sueldo >= salarioMinimo * 4) {
        retencionT = sueldo * 0.04;
    } else {
        retencionT = 0;
    }
    return retencionT;
}
function deducible(){
    let sueldoInical = sueldo(pdiasT,pvalorD);
    let pensionTotal = pension(sueldoInical);
    let saludTotal = salud(sueldoInical);
    let arlTotal = arl(sueldoInical);
    let retencionToltal = retencion();
    let deducibleT = pensionTotal+saludTotal+arlTotal+retencionToltal;
    return deducibleT;
}
function sueldoTotal(){
    let sueldoFinal = (sueldo(pdiasT,pvalorD)+transporte())-(deducible());
    return sueldoFinal;
}

//con expresión
const sueldoExp = function(pdiasT,pvalorD){
    let diasT = pdiasT;
    let valorD = pvalorD;
    let sueldo;
    sueldo = valorD*diasT;
    return sueldo;
}
const saludExp = function(psueldo){
    let salud;
    salud= psueldo*0.12;
    return salud
}
const pensionExp = function(psueldo){
    let pension;
    pension = psueldo*0.16
    return pension
}
const arlExp = function(psueldo){
    let arl;
    arl = psueldo*0.052
    return arl
}
const transporteExp = function(sueldo){
    let transporteT;
    let salarioMinimo = 1300000;
    if(sueldo<=salarioMinimo){
        transporteT= 114000;
        return transporteT;
    }else{
        transporteT= 0;
        return transporteT;
    }
}
const retencionExp = function(sueldo) {
    let retencionT;
    let salarioMinimo = 1300000;
    if (sueldo >= salarioMinimo * 4) {
        retencionT = sueldo * 0.04;
    } else {
        retencionT = 0;
    }
    return retencionT;
}
const deducibleExp = function(){
    let sueldoInical = sueldo(pdiasT,pvalorD);
    let pensionTotal = pension(sueldoInical);
    let saludTotal = salud(sueldoInical);
    let arlTotal = arl(sueldoInical);
    let retencionToltal = retencion();
    let deducibleT = pensionTotal+saludTotal+arlTotal+retencionToltal;
    return deducibleT;
}
const sueldoTotalExp = function(){
    let sueldoFinal = (sueldo(pdiasT,pvalorD)+transporte())-(deducible());
    return sueldoFinal;
}