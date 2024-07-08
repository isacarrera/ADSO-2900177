function operaciones(){
    let numeroUno = parseInt(document.getElementById('n1').value);
    let numeroDos = parseInt(document.getElementById('n2').value);
    let suma;
    let resta;
    let multiplicacion;
    let division;
    let rsumar;
    let rrestar;
    let rmultiplicacion;
    let rdivision;


    suma= numeroUno + numeroDos;
    resta= numeroUno - numeroDos;
    multiplicacion= numeroUno * numeroDos;
    division= numeroUno / numeroDos;

    rsumar= `Sumar: ${suma}<br>`;
    rrestar= `Restar: ${resta}<br>`;
    rmultiplicacion= `Multiplicar: ${multiplicacion}<br>`;
    rdivision= `Dividir: ${division}<br>`;

    document.getElementById(`operaciones`).innerHTML = rsumar + rrestar + rmultiplicacion + rdivision;


    return false
}