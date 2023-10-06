import "./components/grid";

let color: HTMLInputElement | null = document.getElementById("colorPicker") as HTMLInputElement;

const gridContainer: HTMLElement | null = document.getElementById("gridContainer");

const pixelGrid: any = document.querySelector("pixel-grid");
pixelGrid.color = color ? color.value : "";
gridContainer?.addEventListener("click", function (e) {
  if (e.target instanceof HTMLTableCellElement) {
    e.target.style.backgroundColor = color ? color.value : "";
  }
});

pixelGrid.createGrid();
