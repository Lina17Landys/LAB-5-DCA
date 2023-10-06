// Select color input
let color: HTMLInputElement | null = document.getElementById("colorPicker") as HTMLInputElement;

const pixelCanvas: HTMLElement | null = document.getElementById("pixelCanvas");

function createGrid() {
  // Clear the grid if it already exists
  clearGrid();

  const gridSize = 15; // Define the grid size as 15x15

  // Create the 15x15 grid
  for (let i = 0; i < gridSize; i++) {
    const row: HTMLTableRowElement = document.createElement("tr");
    for (let j = 0; j < gridSize; j++) {
      const column: HTMLTableCellElement = document.createElement("td");
      column.id = `column-${i}-${j}`;
      row.appendChild(column);
    }
    if (pixelCanvas) {
      pixelCanvas.appendChild(row);
    }
  }
}

function clearGrid() {
  if (pixelCanvas) {
    pixelCanvas.innerHTML = ""; // Clear the entire grid
  }
}

if (pixelCanvas) {
  // Create the initial 15x15 grid
  createGrid();

  // Add click event listener to color the cells
  pixelCanvas.addEventListener("click", function (e) {
    if (e.target instanceof HTMLTableCellElement) {
      e.target.style.backgroundColor = color ? color.value : "";
    }
  });
}
