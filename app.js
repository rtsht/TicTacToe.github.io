// Les variables
var currSym = "x";
const squares = document.querySelectorAll(".sq");
const button = document.getElementById("button");
const currDisp = document.getElementById("curr-player");
var win = false;
const status = document.getElementById("status");
const emptyTile = "var(--empty-tile-col)";
const playedTile = "var(--played-tile-col)";
const winTile = "var(--winning-tile-col)";
const backCol = "var(--background-col)";
const WinBackCol = "var(--win-background-col)";
const lines = [
    document.querySelectorAll("#s1, #s2, #s3"),
    document.querySelectorAll("#s4, #s5, #s6"),
    document.querySelectorAll("#s7, #s8, #s9"),
    document.querySelectorAll("#s1, #s4, #s7"),
    document.querySelectorAll("#s2, #s5, #s8"),
    document.querySelectorAll("#s3, #s6, #s9"),
    document.querySelectorAll("#s1, #s5, #s9"),
    document.querySelectorAll("#s3, #s5, #s7"),
];

// Clicking on each square
squares.forEach((square) => {
    square.addEventListener("click", function () {
        if (square.innerHTML == "" && win == false) {
            square.innerHTML = currSym;
            square.style.backgroundColor = playedTile;
            toggleSym();
            winCheck();
        }
    });
});

// Reset button click
button.addEventListener("click", function () {
    squares.forEach((square) => {
        square.innerHTML = "";
        square.style.backgroundColor = emptyTile;
    });
    currSym = "x";
    currDisp.innerHTML = "x";
    win = false;
    document.body.style.backgroundColor = backCol;
    status.innerHTML = "current turn:";
});

// Alternating the current player
function toggleSym() {
    currSym = currSym == "x" ? "o" : "x";
    currDisp.innerHTML = currSym;
}

// Check if the current board has a victor and
// setup endgame status
function winCheck() {
    lines.forEach((line) => {
        if (
            line[0].innerHTML != "" &&
            line[0].innerHTML == line[1].innerHTML &&
            line[1].innerHTML == line[2].innerHTML
        ) {
            line.forEach((tile) => {
                tile.style.backgroundColor = winTile;
            });
            win = true;
            document.body.style.backgroundColor = WinBackCol;
            status.innerHTML = "winner:";
            currDisp.innerHTML = currSym == "x" ? "o" : "x";
            return;
        }
    });
}
