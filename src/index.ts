import "./components/grid";

document.addEventListener("DOMContentLoaded", function () {
  const pixelGrids = document.querySelectorAll("pixel-grid");

  pixelGrids.forEach((grid) => {
    grid.addEventListener("click", (e) => {
      if (e.target instanceof HTMLTableCellElement) {
        e.target.style.backgroundColor = "purple";
      }
    });
  });
});


