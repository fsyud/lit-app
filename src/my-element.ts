import { LitElement, css, html } from "lit";
import { customElement, property } from "lit/decorators.js";
// import litLogo from './assets/lit.svg'
// import viteLogo from '/vite.svg'
import "./layout/my-header.ts";
import "./layout/my-article.ts";
import "./layout/my-footer.ts";

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement("my-element")
export class MyElement extends LitElement {
  render() {
    return html`
      <section>
        <my-header></my-header>
        <my-article></my-article>
        <my-footer></my-footer>
      </section>
    `;
  }

  static styles = css`
    :host {
      max-width: 1280px;
      margin: 0 auto;
      padding: 2rem;
      text-align: center;
    }
  `;
}

declare global {
  interface HTMLElementTagNameMap {
    "my-element": MyElement;
  }
}
