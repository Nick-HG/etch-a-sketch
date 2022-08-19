const container = document.getElementById('container');
let rows = document.getElementsByClassName('gridRow');
let cells = document.getElementsByClassName('cell');

function defaultGrid() {
    makeRows(16);
    makeColumns(16);
}

function makeRows(rowNum) {
    for(r = 0; r < rowNum; r++) {
        let row = document.createElement('div');
        container.appendChild(row).className = 'gridRow' ;
    };
}

function makeColumns(cellNum) {
    for(c = 0; c < rows.length; c++) {
        for(i = 0; i < cellNum; i++) {
            let newCell = document.createElement('div');
            rows[i].appendChild(newCell).className = 'cell';
        };
    };
}

defaultGrid();