let currentPlayer = "X";
let board = ["", "", "", "", "", "", "", "", ""];
let isGameOver = false;

const statusDisplay = document.getElementById("status");
const cells = document.querySelectorAll(".cell");

const winningCombinations = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
  [0, 3, 6], [1, 4, 7], [2, 5, 8], // cols
  [0, 4, 8], [2, 4, 6]             // diagonals
];

cells.forEach(cell => {
  cell.addEventListener("click", () => {
    const index = cell.getAttribute("data-index");

    if (board[index] === "" && !isGameOver) {
      board[index] = currentPlayer;
      cell.textContent = currentPlayer;
      checkWinner();
      currentPlayer = currentPlayer === "X" ? "O" : "X";
      if (!isGameOver) {
        statusDisplay.textContent = `Player ${currentPlayer}'s turn`;
      }
    }
  });
});

function checkWinner() {
  for (const combo of winningCombinations) {
    const [a, b, c] = combo;
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      statusDisplay.textContent = `Player ${board[a]} wins!`;
      isGameOver = true;
      return;
    }
  }

  if (!board.includes("")) {
    statusDisplay.textContent = "It's a draw!";
    isGameOver = true;
  }
}

function resetGame() {
  board = ["", "", "", "", "", "", "", "", ""];
  isGameOver = false;
  currentPlayer = "X";
  statusDisplay.textContent = `Player X's turn`;
  cells.forEach(cell => (cell.textContent = ""));
}
if (board[index] === "" && !isGameOver) {
  board[index] = currentPlayer;
  cell.textContent = currentPlayer;

  // 🔴 Change cell color based on player
  cell.style.backgroundColor = currentPlayer === "X" ? "#ffcccc" : "#ccffcc";

  checkWinner();
  currentPlayer = currentPlayer === "X" ? "O" : "X";
  if (!isGameOver) {
    statusDisplay.textContent = `Player ${currentPlayer}'s turn`;
  }
}

