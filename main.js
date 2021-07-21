let gridCols = 100;
let gridRows = 60;
let tileSize = 10;
let mouseHeld = false;

document.onmousedown = mouseDown;
document.onmouseup = mouseUp;

function mouseDown() {
    mouseHeld = true;
}

function mouseUp() {
    mouseHeld = false;
}

function drawClick(obj) {
    obj.style.backgroundColor = "#2b2b2b";
}

function drawHeld(obj) {
    if (mouseHeld) {
        obj.style.backgroundColor = "#2b2b2b";
    }
}

function clearGrid() {
    var tiles = document.getElementsByClassName("tile");
    for (let i = 0; i < tiles.length; i++) {
        tile = tiles[i];
        tile.style.backgroundColor = "#f1eee3";
    }
}

document.addEventListener("DOMContentLoaded", function () {
    var container = document.createElement("div");

    container.id = "grid-container";
    container.ondragstart = function() { return false; };
    container.style.gridTemplateColumns = `repeat(${gridCols}, ${tileSize}px)`
    container.style.gridTemplateRows = `repeat(${gridRows}, ${tileSize}px)`

    document.body.appendChild(container);

    for (let i = 1; i <= gridCols; i++) {
        for (let j = 1; j <= gridRows; j++) {
            var tile = document.createElement("div");

            tile.className = "tile";
            tile.onmouseover = drawHeld.bind(tile, tile);
            tile.onmousedown = drawClick.bind(tile, tile);

            container.appendChild(tile);
        }
    }
}, false);