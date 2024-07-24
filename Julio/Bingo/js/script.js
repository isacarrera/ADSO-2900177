function generarTarjetaBingo(index) {
    let bingou = Array.from({ length: 5 }, (_, row) => Array.from({ length: 5 }, (_, col) => 3 * (row * 5 + col + 1)));

    const specialCases = [
        { numbers: [3, 18, 33, 48, 63], letter: 'B' },
        { numbers: [6, 21, 36, 51, 66], letter: 'I' },
        { numbers: [9, 24, 39, 54, 69], letter: 'N' },
        { numbers: [12, 27, 42, 57, 72], letter: 'G' },
        { numbers: [15, 30, 45, 60, 75], letter: 'O' },
        { numbers: [3, 21, 39, 27, 57, 15, 75, 63, 51], letter: 'X' },
        { numbers: [[6, 24, 12, 42, 36], [33, 51, 69, 39, 63], [39, 69, 57, 45, 75]], letter: 'XXX' }
    ];

    let specialNumbers = [];
    let letter = '';

    if (index < specialCases.length) {
        specialNumbers = specialCases[index].numbers;
        letter = specialCases[index].letter;
    }

    if (letter === 'X' || letter === 'XXX') {
        if (Array.isArray(specialNumbers[0])) {
            specialNumbers.flat().forEach(num => markSpecialNumber(bingou, num, 'X'));
        } else {
            specialNumbers.forEach(num => markSpecialNumber(bingou, num, 'X'));
        }
    } else {
        specialNumbers.forEach(num => markSpecialNumber(bingou, num, 'special-number'));
    }

    return { bingou, letter };
}

function markSpecialNumber(bingou, num, styleClass) {
    let row = Math.floor((num - 1) / 15);
    let col = bingou[row].indexOf(num);
    if (col !== -1) {
        bingou[row][col] = { number: styleClass === 'X' ? 'X' : num, styleClass: styleClass };
    }
}

function crearTarjetaEnDOM(bingou, letter, index) {
    const container = document.getElementById('bingo-cards');

    const card = document.createElement('div');
    card.className = 'bingo-card';

    const header = document.createElement('div');
    header.className = 'bingo-header';  
    header.textContent = `Tarjeta de Bingo ${index + 1} - Letra ${letter}`;
    card.appendChild(header);

    const table = document.createElement('table');
    table.className = 'bingo-table';
    for (let row = 0; row < 5; row++) {
        const tr = document.createElement('tr');
        for (let col = 0; col < 5; col++) {
            const td = document.createElement('td');
            td.className = 'bingo-cell';
            if (typeof bingou[row][col] === 'object') {
                td.textContent = bingou[row][col].number;
                td.classList.add(bingou[row][col].styleClass);
            } else {
                td.textContent = bingou[row][col];
            }
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
    card.appendChild(table);

    container.appendChild(card);
}

for (let k = 0; k < 7; k++) {
    let { bingou, letter } = generarTarjetaBingo(k);
    crearTarjetaEnDOM(bingou, letter, k);
}
