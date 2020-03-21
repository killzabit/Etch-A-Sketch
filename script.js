let columnList;
//Creates rows
function makeRow() {
    let rowAmount = document.getElementById("rowAmt").value;
    for (i = 0; i < rowAmount; i++) {
        let row = document.createElement("DIV");
        row.classList.add("row");
        document.getElementById("mainBox").appendChild(row);
    }
}
//Creates columns
function makeColumn() {
    let columnAmt = document.getElementById("colAmt").value;
    let row = document.querySelectorAll(".row");
    for (const element of row) {
        for (i = 0; i < columnAmt; i++) {
            let column = document.createElement("DIV");
            column.classList.add("column");
            element.appendChild(column);
        }
    }
} 
//Will stop teh discotek
function noMoDisco() {
    document.body.style.background = "white";
    clearInterval(discoTimer);
}

function clearGrid() {
    let box = document.getElementById("mainBox");
    while (box.firstChild) {
      box.removeChild(box.lastChild);
    }
}
//creates random colors in all of the cells/columns
function disco() {
    let col = document.getElementsByClassName("column");  
    let i;
    for (i = 0; i < col.length; i++) {
        let randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
        let newColor = randomColor;
        col[i].style.background = newColor;
        col[i].style.opacity = "1.0";
        document.body.style.background = "black";
    }
}
//keeps the party rolling
let discoTimer;
function discoEvent() {
     discoTimer = setInterval(disco, 250);
}
//the random color function
function rngColor(e) {
    let randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
    let newColor = randomColor;
    e.style.background = newColor;
    e.style.opacity = "1.0";
  }
//increases opacity believe it or not
function increaseOpacity(e) {
    const colStyle = window.getComputedStyle(e);
    let currentOpacity = colStyle.getPropertyValue("opacity");
    let newOpacity = Number(currentOpacity);
    newOpacity += 0.1;
    String(newOpacity);
    e.style.opacity = newOpacity;
}
//creates the grid after hitting submit
function makeGrid() {
    makeRow();
    makeColumn();
    columnList = document.querySelectorAll(".column");
}

const rngMouseEnterHandler = (e) => rngColor(e.target);

//makes random colors stop if its not checked
function rngColorFunction() {
    if (document.getElementById("rngColor").checked) {
            columnList.forEach(
                (column) => {
                    column.addEventListener("mouseenter", rngMouseEnterHandler)
                }
            );
    } else {
        columnList.forEach(
            (column) => {
                column.removeEventListener("mouseenter", rngMouseEnterHandler)
            }
        )
    }
}

const shadingEventHandler = (e) => increaseOpacity(e.target);
//makes shading pencil stop if its not checked
function shadingFunction() {
    if (document.getElementById("shading").checked) {
            columnList.forEach(
                (column) => {
                    column.addEventListener("mouseenter", shadingEventHandler);
                }
            );
    } else {
        columnList.forEach(
            (column) => {
                column.removeEventListener("mouseenter", shadingEventHandler);
            }
        )
    }
}
//for the color well
function colorPicker(e) {
    let input = document.getElementById("colorPicker").value;
    e.style.background = input;
    e.style.opacity = "1.0";
}

const colorPickerHandler = (e) => colorPicker(e.target)
//color well event handler
function colorPickerFunction() {
    columnList.forEach(
        (column) => {
            column.addEventListener("mouseenter", colorPickerHandler);
        }
    )
}


document.getElementById("colorPicker").addEventListener("input", colorPickerFunction)
document.getElementById("disco").addEventListener("click", discoEvent);
document.getElementById("rngColor").addEventListener("change", rngColorFunction);
document.getElementById("shading").addEventListener("change", shadingFunction);
document.getElementById("gridBtn").addEventListener("click", makeGrid);
document.getElementById("reset").addEventListener("click", clearGrid);
document.getElementById("reset").addEventListener("click", noMoDisco);


