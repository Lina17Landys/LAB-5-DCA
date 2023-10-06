class Grids extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }

    connectedCallback() {
        this.render();
    }
render() {
    this.innerHTML = ''
}
   
}

customElements.define("grid-container", Grids);
export default Grids;