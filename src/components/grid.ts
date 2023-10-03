import { gridsData } from '../data';

class Grids extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }

    connectedCallback() {
        this.fetchAndRenderData();
    }

    async fetchAndRenderData() {
        try {
            let html = '<table border="1">';

            gridsData.forEach((gridData) => {
                html += `<tr><th colspan="15">${gridData.title}</th></tr>`;
                gridData.grid.forEach((row) => {
                    html += '<tr>';
                    row.forEach((cell:any) => {
                        html += `<td>${cell ? 'X' : ''}</td>`;
                    });
                    html += '</tr>';
                });
            });

            html += '</table>';

            this.shadowRoot!.innerHTML = html;
        } catch (error) {
            console.error("Error al obtener los datos:", error);
        }
    }
}

customElements.define("grid-container", Grids);
export default Grids;