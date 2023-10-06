import "./components/grid";

let color: HTMLInputElement | null = document.getElementById("colorPicker") as HTMLInputElement;

const gridContainer: HTMLElement | null = document.getElementById("gridContainer");

gridContainer?.addEventListener("click", function (e) {
  if (e.target instanceof HTMLTableCellElement) {
    e.target.style.backgroundColor = color ? color.value : "";
  }
});
