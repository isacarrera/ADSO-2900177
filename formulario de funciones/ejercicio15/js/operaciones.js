function sueldo(pdiasT, pvalorD) {
    let diasT = pdiasT;
    let valorD = pvalorD;
    let sueldo;
    sueldo = valorD * diasT;
    return sueldo;
}

function salud(psueldo) {
    let salud;
    salud = psueldo * 0.12;
    return salud;
}

function pension(psueldo) {
    let pension;
    pension = psueldo * 0.16;
    return pension;
}

function arl(psueldo) {
    let arl;
    arl = psueldo * 0.052;
    return arl;
}

function transporte(sueldo) {
    let transporteT;
    let salarioMinimo = 1300000;
    if (sueldo <= salarioMinimo) {
        transporteT = 114000;
    } else {
        transporteT = 0;
    }
    return transporteT;
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

function calcularSueldo() {
    let pdiasT = parseFloat(document.getElementById('n1').value);
    let pvalorD = parseFloat(document.getElementById('n2').value);

    let sueldoInicial = sueldo(pdiasT, pvalorD);
    let pensionTotal = pension(sueldoInicial);
    let saludTotal = salud(sueldoInicial);
    let arlTotal = arl(sueldoInicial);
    let transporteTotal = transporte(sueldoInicial);
    let retencionTotal = retencion(sueldoInicial);
    let deducibles = pensionTotal + saludTotal + arlTotal + retencionTotal;
    let sueldoFinal = sueldoInicial - deducibles + transporteTotal;

    let rsueldo = `Sueldo: ${sueldoInicial}<br>`;
    let rpension = `Pension: ${pensionTotal}<br>`;
    let rsalud = `Salud: ${saludTotal}<br>`;
    let rarl = `Arl: ${arlTotal}<br>`;
    let rtransporte = `Transporte: ${transporteTotal}<br>`;
    let rretencion = `Retención: ${retencionTotal}<br>`;
    let rfinal = `Sueldo Final: ${sueldoFinal}<br>`;

    document.getElementById('resultadoSueldo').innerHTML = rsueldo + rpension + rsalud + rtransporte + rarl + rretencion + rfinal;

    return false;
}
