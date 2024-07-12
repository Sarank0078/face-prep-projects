let playerTurn = "X";
let gameBoard = ["", "", "", "", "", "", "", "", ""];

function updateGameBoard(cellNumber) {
    if (gameBoard[cellNumber - 1] === "") {
        gameBoard[cellNumber - 1] = playerTurn;
        document.getElementById("b" + cellNumber).innerHTML = playerTurn;
        document.getElementById("b" + cellNumber).disabled = true;
        checkWin();
        playerTurn = playerTurn === "X" ? "O" : "X";
    }
}

function checkWin() {
    let winConditions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    for (let i = 0; i < winConditions.length; i++) {
        let condition = winConditions[i];
        if (gameBoard[condition[0]] !== "" && gameBoard[condition[0]] === gameBoard[condition[1]] && gameBoard[condition[0]] === gameBoard[condition[2]]) {
            alert("Player " + gameBoard[condition[0]] + " wins!");
            return;
        }
    }

    if (!gameBoard.includes("")) {
        alert("It's a draw!");
    }
}

function resetGame() {
    playerTurn = "X";
    gameBoard = ["", "", "", "", "", "", "", "", ""];
    for (let i = 1; i <= 9; i++) {
        document.getElementById("b" + i).innerHTML = "";
        document.getElementById("b" + i).disabled = false;
    }
}

for (let i = 1; i <= 9; i++) {
    document.getElementById("b" + i).addEventListener("click", () => updateGameBoard(i));
}

document.getElementById("reset").addEventListener("click", resetGame);