import { LitElement, html, css } from "lit";
import { customElement } from "lit/decorators.js";

import "./../layout/my-header.ts";
import "./../layout/my-article.ts";
import "./../layout/my-footer.ts";

@customElement("app-home")
export class AppHome extends LitElement {


  render() {
    return html`
      <section>
        <my-header></my-header>
        <my-article></my-article>
        <my-footer></my-footer>
      </section>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "app-home": AppHome;
  }
}
