// Activity 10: Tic-Tac-Toe with localStorage

console.log("=== Activity 10: Tic-Tac-Toe with localStorage ===");

// localStorage demo
localStorage.setItem("demo", "Hello");
console.log(localStorage.getItem("demo"));
localStorage.removeItem("demo");

// Game state
const STORAGE_KEY = "tictactoe-game-state";

let gameState = {
  board: ["", "", "", "", "", "", "", "", ""],
  currentPlayer: "X",
  gameActive: true,
  winner: null,
  winningCombination: null,
};

// winning combos
const WINNING_COMBINATIONS = [
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6]
];

// initialize game
function initializeGame() {
  gameState = {
    board: ["", "", "", "", "", "", "", "", ""],
    currentPlayer: "X",
    gameActive: true,
    winner: null,
    winningCombination: null,
  };

  updateBoard();
  updateStatus();
  saveGameState();
}

// make move
function makeMove(index) {
  if (!gameState.gameActive || gameState.board[index] !== "") return;

  gameState.board[index] = gameState.currentPlayer;

  const result = checkWinner();

  if (result.winner) {
    gameState.gameActive = false;
    gameState.winner = result.winner;
    gameState.winningCombination = result.combination;
  } else if (gameState.board.every(cell => cell !== "")) {
    gameState.gameActive = false;
  } else {
    gameState.currentPlayer = gameState.currentPlayer === "X" ? "O" : "X";
  }

  updateBoard();
  updateStatus();
  saveGameState();
}

// check winner
function checkWinner() {
  for (let combo of WINNING_COMBINATIONS) {
    const [a,b,c] = combo;
    if (
      gameState.board[a] &&
      gameState.board[a] === gameState.board[b] &&
      gameState.board[a] === gameState.board[c]
    ) {
      return { winner: gameState.board[a], combination: combo };
    }
  }
  return { winner: null, combination: null };
}

// save
function saveGameState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(gameState));
}

// load
function loadGameState() {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved) {
    gameState = JSON.parse(saved);
    return true;
  }
  return false;
}

// update board
function updateBoard() {
  document.querySelectorAll(".cell").forEach((cell, i) => {
    const value = gameState.board[i];
    cell.textContent = value;

    cell.classList.remove("taken","x","o","winning");

    if (value) {
      cell.classList.add("taken");
      cell.classList.add(value.toLowerCase());
    }

    if (
      gameState.winningCombination &&
      gameState.winningCombination.includes(i)
    ) {
      cell.classList.add("winning");
    }
  });
}

// update status
function updateStatus() {
  const status = document.getElementById("statusMessage");

  status.classList.remove("winner","draw");

  if (gameState.winner) {
    status.textContent = `Player ${gameState.winner} wins!`;
    status.classList.add("winner");
  } else if (!gameState.gameActive) {
    status.textContent = "It's a draw!";
    status.classList.add("draw");
  } else {
    status.textContent = `Player ${gameState.currentPlayer}'s turn`;
  }
}

// click handler
function handleClick(e) {
  const cell = e.target;
  const index = cell.getAttribute("data-index");
  makeMove(Number(index));
}

// start app
function init() {
  const hasSaved = loadGameState();

  if (!hasSaved) initializeGame();
  else {
    updateBoard();
    updateStatus();
  }

  document.getElementById("gameBoard")
    .addEventListener("click", handleClick);

  document.getElementById("newGameBtn")
    .addEventListener("click", initializeGame);
}

init();
