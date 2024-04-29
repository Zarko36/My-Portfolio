// Worked on by:
// Joel Muniz - jmuni017
// Isaac Castro - Isaac Castro - icast065
document.addEventListener('DOMContentLoaded', () => {
    const menuOne = document.getElementById("menu_one");
    const gamemodeOneButton = document.querySelector(".gamemode_one");
    const gamemodeTwoButton = document.querySelector(".gamemode_two");
    const menuTwo = document.getElementById("menu_two");
    const scoreDisplay = document.querySelector(".score_display");
    const displayPlayer = document.querySelector(".player_display");
    const boardDisplay = document.querySelector(".game_board");
    const boardCells = document.querySelectorAll(".xo");
    const newGameButton = document.querySelector(".newgame");
    const resetButton = document.querySelector(".reset");
    let gamePower = false;
    let currentBoard = Array(9).fill(null);
    let currentScores = { X: 0, O: 0 };
    let currentPlayerTurn = "X";
    let currentGamemode = "";

    function updateGameBoard(index) {
        boardCells[index].textContent = currentBoard[index];
        boardCells[index].parentNode.classList.add("in_use");
    }
    
    function resetGameBoard() {
        currentBoard.fill(null);
        boardCells.forEach(square => {
            square.textContent = "";
            square.parentNode.classList.remove("in_use");
        });
        boardDisplay.classList.remove("game_off");
    }

    function switchMenus(menuDisplay, menuHidden) {
        menuDisplay.classList.remove("hidden");
        menuHidden.classList.add("hidden");
    }
    
    function selectGamemode(selectedGamemode) {
        currentGamemode = selectedGamemode;
        gamePower = true;
        switchMenus(menuTwo, menuOne);
    }

    function checkGameBoardFull() {
        return currentBoard.every(cell => cell !== null);
    }
    
    function newGame() {
        currentPlayerTurn = "X";
        displayPlayer.textContent = currentPlayerTurn;
        gamePower = true;
        boardDisplay.classList.remove("game_off");
        resetGameBoard();
    }
    
    function resetGame() {
        newGame();
        currentScores = {X:0, O:0};
        scoreDisplay.textContent = `X : ${currentScores["X"]} O : ${currentScores["O"]}`;
        switchMenus(menuOne, menuTwo);
    }
    
    function searchWinner() {
        const winningLines = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
        for (let currentLine of winningLines) {
            const [a, b, c] = currentLine;
            if ((currentBoard[a]) && (currentBoard[a] === currentBoard[b]) && (currentBoard[a] === currentBoard[c])) { return currentBoard[a]; }
        }
        return null;
    }
    
    function playerMovement(index) {
        if ((currentBoard[index] !== null) || (!gamePower)) { return; }
        currentBoard[index] = currentPlayerTurn;
        updateGameBoard(index);
        gameEvaluater();
        if ((currentPlayerTurn === "O") && (currentGamemode === "useGamemodeTwo")) { computerMovement(); }
    }

    function computerMovement() {
        let maximumScore = -Infinity;
        let maximumMove;
        for (let i = 0; i < currentBoard.length; i++) {
            if (currentBoard[i] === null) {
                currentBoard[i] = 'O';
                let score = miniMaxAlgorithm(-Infinity, Infinity, false, 0);
                currentBoard[i] = null;
                if (score > maximumScore) {
                    maximumScore = score;
                    maximumMove = i;
                }
            }
        }
        if (maximumMove !== undefined) {
            currentBoard[maximumMove] = 'O';
            updateGameBoard(maximumMove);
            gameEvaluater();
        }
    }

    function gameEvaluater() {
        let gameWinner = searchWinner();
        if (gameWinner) {
            setTimeout(() => alert(`Player ${gameWinner} wins!`), 10);
            currentScores[gameWinner]++;
            scoreDisplay.textContent = `X : ${currentScores["X"]} O : ${currentScores["O"]}`;
            gamePower = false;
            boardDisplay.classList.add("game_off");
            playerXTurn = false;
        } 
        else if (checkGameBoardFull()) {
            setTimeout(() => alert(`Draw!`), 10);
            gamePower = false;
            boardDisplay.classList.add("game_off");
            playerXTurn = false;
        } 
        else {
            currentPlayerTurn = currentPlayerTurn === "X" ? "O" : "X";
            displayPlayer.textContent = currentPlayerTurn;
        }
    }
    
    function miniMaxAlgorithm(alphaVariable, betaVariable, isMaximizing, gameTreeDepth) {
        if (searchWinner() === 'X') { return gameTreeDepth - 10; } 
        else if (searchWinner() === 'O') { return 10 - gameTreeDepth; } 
        else if (checkGameBoardFull()) { return 0; }
        if (isMaximizing) {
            let maxGuess = -Infinity;
            for (let i = 0; i < currentBoard.length; i++) {
                if (currentBoard[i] === null) {
                    currentBoard[i] = 'O';
                    let guess = miniMaxAlgorithm(alphaVariable, betaVariable, false, gameTreeDepth + 1);
                    currentBoard[i] = null;
                    maxGuess = Math.max(maxGuess, guess);
                    alphaVariable = Math.max(alphaVariable, guess);
                    if (alphaVariable >= betaVariable) { break; }
                }
            }
            return maxGuess;
        } 
        else {
            let minGuess = Infinity;
            for (let i = 0; i < currentBoard.length; i++) {
                if (currentBoard[i] === null) {
                    currentBoard[i] = 'X';
                    let guess = miniMaxAlgorithm(alphaVariable, betaVariable, true, gameTreeDepth + 1);
                    currentBoard[i] = null;
                    minGuess = Math.min(minGuess, guess);
                    betaVariable = Math.min(betaVariable, guess);
                    if (alphaVariable >= betaVariable) { break; }
                }
            }
            return minGuess;
        }
    }

    switchMenus(menuOne, menuTwo);
    displayPlayer.textContent = currentPlayerTurn;
    scoreDisplay.textContent = `X : ${currentScores["X"]} O : ${currentScores["O"]}`;
    gamemodeOneButton.addEventListener("click", () => selectGamemode("useGamemodeOne"));
    gamemodeTwoButton.addEventListener("click", () => selectGamemode("useGamemodeTwo"));
    playerXTurn = true;
    boardCells.forEach((square, index) => {
        square.addEventListener("click", () => playerMovement(index));
    });
    newGameButton.addEventListener("click", () => newGame());
    resetButton.addEventListener("click", () => resetGame());
});
// Worked on by:
// Joel Muniz - jmuni017
// Isaac Castro - Isaac Castro - icast065