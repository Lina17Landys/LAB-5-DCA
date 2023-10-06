class Grid extends HTMLElement {
    private pixelCanvas: HTMLTableElement | null;
    private color: string | null;
    
    constructor() {
      super();
      this.attachShadow({ mode: "open" });
      this.pixelCanvas = null;
      this.color = null; 
    }
  
    connectedCallback() {
      const colorPickerId = this.getAttribute("color-picker-id");
      const colorPicker: HTMLInputElement | null = document.getElementById(colorPickerId) as HTMLInputElement;
  
      if (colorPicker) {
        this.color = colorPicker.value;
  
        this.render();
      } else {
        console.error("No se encontró el elemento colorPicker");
      }
    }
  
    render() {
      this.shadowRoot!.innerHTML = '<link rel="stylesheet" href="../src/components/styles.css">';
  
      const gridSize = 15; 
  
      const table = document.createElement("table");
      table.id = "pixelCanvas";
      this.pixelCanvas = table; 
  
      
      for (let i = 0; i < gridSize; i++) {
        const row = document.createElement("tr");
        for (let j = 0; j < gridSize; j++) {
          const column = document.createElement("td");
          column.id = `column-${i}-${j}`;
          row.appendChild(column);
  
          column.addEventListener("click", function () {
            column.style.backgroundColor = color ? color.value : "";
          });
        }
        table.appendChild(row);
      }
  
      this.shadowRoot?.appendChild(table);
    }
  }
  
  customElements.define("pixel-grid", Grid);
  