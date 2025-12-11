const grid = document.getElementById("sudoku-grid");
for (let i = 0; i < 81; i++) {
  const cell = document.createElement("div");

  const row = Math.floor(i / 9) + 1;
  const col = (i % 9) + 1;

  if (col === 3 || col === 6) cell.style.borderRight = "3px solid";
  if (row === 3 || row === 6) cell.style.borderBottom = "3px solid";
  grid.appendChild(cell);
}
