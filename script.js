let defaultColCount = 16;
let defaultRowCount = 16;

const gridContainer = document.getElementById('gridContainer');
const gridSizeBtn = document.getElementById('gridSizeBtn');

gridSizeBtn.addEventListener('click', function(event){
    removeCurrentGrid();
    newRowSize = Number(prompt("Enter desired row size: "));
    newColSize = Number(prompt("Enter desired column size: "));
    updateGridSize(newRowSize, newColSize);
})

function removeCurrentGrid(){
    while (gridContainer.firstChild){
        gridContainer.removeChild(gridContainer.firstChild);
    }
}

updateGridSize(defaultRowCount, defaultColCount);

// Create grid of divs
function updateGridSize(rowSize, colSize){
    for (let i = 0; i < rowSize; i++){
        for (let i = 0; i < colSize; i++){
            const div = document.createElement('div');
            div.classList.add('cell');
            gridContainer.appendChild(div);
        }
    }
}


const cells = document.querySelectorAll('.cell');
cells.forEach(cell => cell.addEventListener('mouseover', function(event){
    updateCellHoverState(event.target);
}))

function updateCellHoverState(cell){
    cell.classList.add('hovered');
}