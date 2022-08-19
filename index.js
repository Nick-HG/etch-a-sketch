let color = 'black';

function populateBoard(size) {
    let board = document.querySelector('.board');
    let squares = board.querySelectorAll('div');
    squares.forEach((div) => div.remove());
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    
    let amount = size * size;
    for(let i = 0; i < amount; i++) {
        let square = document.createElement('div');
        square.addEventListener('mouseover', colorSquare);
        square.style.backgroundColor = 'white';
        board.insertAdjacentElement('beforeend', square);
    };
}

populateBoard(32);


function changeSize(input) {
    if(input < 100) {
        populateBoard(input);
    } else {
        console.error('too many square');
    }
}

function colorSquare() {
    if(color === 'random') {
        this.style.backgroundColor = "#" + (Math.random() * 0xFFFFFF<<0).toString(16);
    } else {
        this.style.backgroundColor = color;
    }
    
}

function changeColor(choice) {
    color = choice;
}