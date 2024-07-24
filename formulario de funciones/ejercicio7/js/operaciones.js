//con parametro
function AreaCua(plado1,plado2){
    let lado1= plado1;
    let lado2= plado2;
    let area;
    area= lado1*lado2;
    return area;
}
function AreaTri(pbase,paltura){
    let base= pbase;
    let altura= paltura;
    let area;
    area= (base*altura)/2;
    return area;
}
function AreaRec(pbase,paltura){
    let base= pbase;
    let altura= paltura;
    let area;
    area= base*altura;
    return area;
}

function calcularArea() {

    let num1 = parseFloat(document.getElementById('n1').value);
    let num2 = parseFloat(document.getElementById('n2').value);

    let resultado = AreaCua(num1,num2);
    let resultado2 = AreaTri(num1,num2);
    let resultado3 = AreaRec(num1,num2);

    document.getElementById('resultadoArea').innerText = `area cuadrado: ${resultado}`;
    document.getElementById('resultadoArea2').innerText = `area triangulo: ${resultado2}`;
    document.getElementById('resultadoArea3').innerText = `area rectangulo: ${resultado3}`;

    return false;
}
