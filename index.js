// create a 16x16 grid
const container = document.querySelector('.container');


for(i = 0; i < 16; i++) {
    const divSquare = document.createElement('div');
    divSquare.className = 'square';
    document.querySelector('.container').appendChild(divSquare);
};