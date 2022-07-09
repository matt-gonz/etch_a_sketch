let defaultColCount = 16;
let defaultRowCount = 16;
let colorMode = 'Light';

const gridContainer = document.getElementById('gridContainer');
const gridSizeBtn = document.getElementById('gridSizeBtn');
const clearGridBtn = document.getElementById('clearGridBtn');
const sliderLabelGridSize = document.getElementById('sliderLabelGridSize');
const slider = document.getElementById('mySlider');

clearGridBtn.addEventListener('click', function(event){
    clearGrid();
})

// Default grid size settings
updateGridSize(defaultRowCount, defaultColCount);

// Create grid of divs
function updateGridSize(rowSize, colSize){
    gridContainer.setAttribute('style', `grid-template-columns: repeat(${colSize}, 2fr); 
        grid-template-rows: repeat(${rowSize}, 2fr)`);
    for (let i = 0; i < rowSize; i++){
        for (let i = 0; i < colSize; i++){
            const div = document.createElement('div');
            div.classList.add('cell');
            gridContainer.appendChild(div);
            div.addEventListener('mouseover', function(event){
                updateCellHoverState(event.target);
            })
        }
    }
}

function updateCellHoverState(cell){
    cell.classList.remove('hovered-light', 'hovered-dark', 'hovered-eraser');
    if (colorMode === "Light"){
        cell.classList.add('hovered-light');
    }
    else if (colorMode === "Dark"){
        cell.classList.add('hovered-dark');
    }
    else{
        cell.classList.add('hovered-eraser');
    }
    
}

// Update slider val when dragged
slider.oninput = function(){
    let numGridRows = this.value;
    let numGridCols = numGridRows;
    refreshGrid(numGridRows, numGridCols);
    sliderLabelGridSize.textContent = `${numGridRows}x${numGridCols}`;
}

function refreshGrid(newRowSize, newColSize){
    removeCurrentGrid();
    updateGridSize(newRowSize, newColSize);
}

function clearGrid(){
    let highlightedDivs = document.querySelectorAll('.hovered-light, .hovered-dark, .hovered-eraser');
    highlightedDivs.forEach(div => div.classList.remove('hovered-light', 'hovered-dark', 'hovered-eraser'));
}

function removeCurrentGrid(){
    while (gridContainer.firstChild){
        gridContainer.removeChild(gridContainer.firstChild);
    }
}

const colorModeBtns = document.querySelectorAll('.color-mode-btn');
colorModeBtns.forEach(btn => btn.addEventListener('click', function(event){
    let newColorMode = event.target.textContent;
    changeColorMode(newColorMode);
}));

function changeColorMode(newColorMode){
    colorMode = newColorMode;
}