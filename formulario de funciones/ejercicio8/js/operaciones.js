function sueldo(pdiasT, pvalorD) {
    let sueldo = pvalorD * pdiasT;
    return sueldo;
}

function pension(psueldo) {
    let pension = psueldo * 0.16;
    return pension;
}

function salud(psueldo) {
    let salud = psueldo * 0.12;
    return salud;
}

function arl(psueldo) {
    let arl = psueldo * 0.052;
    return arl;
}

function calcularSueldo() {
    let pdiasT = parseFloat(document.getElementById('n1').value);
    let pvalorD = parseFloat(document.getElementById('n2').value);

    let sueldoInicial = sueldo(pdiasT, pvalorD);
    let pensionTotal = pension(sueldoInicial);
    let saludTotal = salud(sueldoInicial);
    let arlTotal = arl(sueldoInicial);
    let deducibles = pensionTotal + saludTotal + arlTotal;
    let sueldoFinal = sueldoInicial - deducibles;

    let rsueldo = `Sueldo: ${sueldoInicial}<br>`;
    let rpension = `Pension: ${pensionTotal}<br>`;
    let rsalud = `Salud: ${saludTotal}<br>`;
    let rarl = `Arl: ${arlTotal}<br>`;
    let rfinal = `Sueldo Final: ${sueldoFinal}<br>`;

    document.getElementById('resultadoSueldo').innerHTML = rsueldo + rpension + rsalud + rarl + rfinal;

    return false;
}
