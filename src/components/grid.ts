class Grid extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: "open" });
    }
  
    connectedCallback() {
      this.render();
    }
  
    render() {
        this.shadowRoot!.innerHTML = '<link rel="stylesheet" href="../src/components/styles.css">'
      const gridSize = 15; 
  
      const table = document.createElement("table");
      table.id = "pixelCanvas";
      for (let i = 0; i < gridSize; i++) {
        const row = document.createElement("tr");
        for (let j = 0; j < gridSize; j++) {
          const column = document.createElement("td");
          column.id = `column-${i}-${j}`;
          row.appendChild(column);
        }
        table.appendChild(row);
      }
  
      this.shadowRoot?.appendChild(table);
    }
  }
  
  customElements.define("pixel-grid", Grid);  
export default Grid;  