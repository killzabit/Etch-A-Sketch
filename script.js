
function makeRow() {
    let rowAmount = document.getElementById("rowAmt").value;
    for (i = 0; i < rowAmount; i++) {
        let row = document.createElement("DIV");
        row.classList.add("row");
        document.getElementById("mainBox").appendChild(row);
    }
}

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

function discoEvent() {
const discoTimer = setInterval(disco, 250);
}

function rngColor(e) {
    let randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
    let newColor = randomColor;
    e.style.background = newColor;
    e.style.opacity = "1.0";
  }

function increaseOpacity(e) {
    const colStyle = window.getComputedStyle(e);
    let currentOpacity = colStyle.getPropertyValue("opacity");
    let newOpacity = Number(currentOpacity);
    newOpacity += 0.1;
    String(newOpacity);
    e.style.opacity = newOpacity;
}

function makeGrid() {
    makeRow();
    makeColumn();
}

function rngColorFunction() {
    if (document.getElementById("rngColor").checked) {
        let columnList = document.querySelectorAll(".column");
            columnList.forEach(
                (column) => {
                    column.addEventListener("mouseenter", (e) => {
                        rngColor(e.target)
                    });
                }
            );
    }
}

function shadingFunction() {
    if (document.getElementById("shading").checked) {
        let columnList = document.querySelectorAll(".column");
            columnList.forEach(
                (column) => {
                    column.addEventListener("mouseenter", (e) => {
                        increaseOpacity(e.target)
                    });
                }
            );
    }
}

document.getElementById("disco").addEventListener("click", discoEvent);
document.getElementById("rngColor").addEventListener("change", rngColorFunction);
document.getElementById("shading").addEventListener("change", shadingFunction);
document.getElementById("gridBtn").addEventListener("click", makeGrid);
document.getElementById("reset").addEventListener("click", clearGrid);
document.getElementById("reset").addEventListener("click", noMoDisco);


