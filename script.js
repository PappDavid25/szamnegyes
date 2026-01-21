const cells = document.querySelectorAll(".cell");

const table = Array(9).fill(0);

const moves = {
  btnA: [0, 1, 3, 4],
  btnB: [1, 2, 4, 5],
  btnC: [3, 4, 6, 7],
  btnD: [4, 5, 7, 8],
};

const out = document.getElementById("out");
const tableOut = document.getElementById("tableOut");

function getTable2D() {
  return [
    [table[0], table[1], table[2]],
    [table[3], table[4], table[5]],
    [table[6], table[7], table[8]],
  ];
}

function render() {
  for (let i = 0; i < cells.length; i++) {
    cells[i].textContent = table[i];
  }
  tableOut.textContent = JSON.stringify(getTable2D());
}

function applyMove(buttonId) {
  for (const i of moves[buttonId]) {
    table[i] = table[i] + 1;
  }
  render();
}

function solve(board) {
  const A = board[0][0];
  const B = board[0][2];
  const C = board[2][0];
  const D = board[2][2];

  if (
    board[0][1] !== A + B ||
    board[1][0] !== A + C ||
    board[1][2] !== B + D ||
    board[2][1] !== C + D ||
    board[1][1] !== A + B + C + D
  ) {
    return [-1];
  }

  return [A, B, C, D];
}

document
  .getElementById("btnA")
  .addEventListener("click", () => applyMove("btnA"));
document
  .getElementById("btnB")
  .addEventListener("click", () => applyMove("btnB"));
document
  .getElementById("btnC")
  .addEventListener("click", () => applyMove("btnC"));
document
  .getElementById("btnD")
  .addEventListener("click", () => applyMove("btnD"));

document.getElementById("btnDecode").addEventListener("click", () => {
  out.textContent = JSON.stringify(solve(getTable2D()));
});

document.getElementById("btnReset").addEventListener("click", () => {
  for (let i = 0; i < table.length; i++) table[i] = 0;
  out.textContent = "";
  render();
});

render();
