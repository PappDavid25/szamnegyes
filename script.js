const cells = document.querySelectorAll(".cell");

const table = Array(9).fill(0);

const moves = {
  btnA: [0, 1, 3, 4],
  btnB: [1, 2, 4, 5],
  btnC: [3, 4, 6, 7],
  btnD: [4, 5, 7, 8],
};

function render() {
  for (let i = 0; i < cells.length; i++) {
    cells[i].textContent = table[i];
  }
}

function applyMove(buttonId) {
  for (const i of moves[buttonId]) {
    table[i] = table[i] + 1;
  }
  render();
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

render();
