console.log("hola");
import * as components from "./components/exports"
class App extends HTMLElement {
    constructor() {
        super()
        this.attachShadow({ mode: "open" });
    }
    connectedCallback() {
        this.render();
      }

      render() {
        this.shadowRoot!.innerHTML = '<grid-container></grid-container> '
      }
}

customElements.define("app-container", App);