function generarTarjetaBingo(index){
    let bingou = [];
    let aumento = 1;
    for (let i = 0; i < 5; i++) {
        bingou[i] = [];
        for (let j = 0; j < 5; j++) {
            bingou[i][j] = 3 * aumento;
            aumento++;
        }
    }
    
    let specialNumbers = [];
    let letter = '';
    if (index === 0) {
        specialNumbers = [3, 18, 33, 48, 63];
        letter = 'B';
    } else if (index === 1) {
        specialNumbers = [6, 21, 36, 51, 66];
        letter = 'I';
    } else if (index === 2) {
        specialNumbers = [9, 24, 39, 54, 69];
        letter = 'N';
    } else if (index === 3) {
        specialNumbers = [12, 27, 42, 57, 72];
        letter = 'G';
    } else if (index === 4) {
        specialNumbers = [15, 30, 45, 60, 75];
        letter = 'O';
    } else if (index === 5) {
        specialNumbers = [3, 21, 39, 27, 57, 15, 75, 63, 51];
        letter = 'X';
        for (let num of specialNumbers) {
            let row = Math.floor((num - 1) / 15);
            let col = bingou[row].indexOf(num);
            bingou[row][col] = { number: 'X', styleClass: 'x' };
        }
    } else if (index === 6) {
        specialNumbers = [
            [6, 24, 12, 42, 36],
            [33, 51, 69, 39, 63],
            [39, 69, 57, 45, 75]
        ];
        letter = 'XXX';

        for (let xIndex = 0; xIndex < specialNumbers.length; xIndex++) {
            let xPositions = specialNumbers[xIndex];
            for (let num of xPositions) {
                let row = Math.floor((num - 1) / 15);
                let col = bingou[row].indexOf(num);
                bingou[row][col] = { number: 'X', styleClass: 'x' };
            }
        }
    }

    if (specialNumbers.length > 0) {
        for (let number of specialNumbers) {
            for (let row = 0; row < 5; row++) {
                for (let col = 0; col < 5; col++) {
                    if (bingou[row][col] === number) {
                        bingou[row][col] = { number: number, styleClass: 'special-number' };
                    }
                }
            }
        }
    }

    return { bingou, letter };
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
            if (bingou[row][col].styleClass) {
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
