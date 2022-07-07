const gridContainer = document.getElementById('gridContainer');

let colCount = 16;
let rowCount = 16;

// Create grid of divs
for (let i = 0; i < rowCount; i++){
    for (let i = 0; i < colCount; i++){
        const div = document.createElement('div');
        div.classList.add('cell');
        gridContainer.appendChild(div);
    }
}

const cells = document.querySelectorAll('.cell');
cells.forEach(cell => cell.addEventListener('mouseover', function(event){
    updateCellHoverState(event.target);
}))

function updateCellHoverState(cell){
    cell.classList.add('hovered');
}