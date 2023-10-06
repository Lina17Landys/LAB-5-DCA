class Grid extends HTMLElement {
  private currentColor: string = "purple";
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  createGrid() {
    const gridSize = 10;
    const table = document.createElement("table");
    table.id = "pixelCanvas";

    for (let i = 0; i < gridSize; i++) {
      const row = document.createElement("tr");
      for (let j = 0; j < gridSize; j++) {
        const column = document.createElement("td");
        column.id = `column-${i}-${j}`;
        row.appendChild(column);

        column.addEventListener("click", () => {
          column.style.backgroundColor = this.currentColor;
        });
      }
      table.appendChild(row);
    }

    this.shadowRoot!.innerHTML =
      '<link rel="stylesheet" href="../src/components/styles.css"><h1>Chess colors<h1>';
    this.shadowRoot!.appendChild(table);
  }

  render() {
    this.createGrid();
  }
}
customElements.define("pixel-grid", Grid);

const pixelGrids = document.querySelectorAll("pixel-grid");
pixelGrids.forEach((grid) => {
  grid.addEventListener("click", (e) => {
    if (e.target instanceof HTMLTableCellElement) {
      e.target.style.backgroundColor = "purple";
    }
  });
});
