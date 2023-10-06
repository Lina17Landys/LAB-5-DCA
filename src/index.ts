import "./components/grid";
let currentColor = "purple"; 

document.addEventListener("DOMContentLoaded", function () {
  const pixelGrids = document.querySelectorAll("pixel-grid");

  pixelGrids.forEach((grid) => {
    grid.addEventListener("click", (e) => {
      if (e.target instanceof HTMLTableCellElement) {
        currentColor = "purple"; 
        pixelGrids.forEach((grid) => {
          grid.shadowRoot!.querySelectorAll("td").forEach((column) => {
            column.style.backgroundColor = currentColor;
          });
        });
      }
    });
  });
});



