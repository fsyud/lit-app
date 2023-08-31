import { LitElement, css, html } from "lit";
import { customElement, property } from "lit/decorators.js";
// import litLogo from './assets/lit.svg'
// import viteLogo from '/vite.svg'
import './my-header.ts';
import './my-article.ts';
import './my-footer.ts';

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement("my-element")
export class MyElement extends LitElement {
  /**
   * The number of times the button has been clicked.
   */
  @property({ type: Number })
  count = 0;

  render() {
    return html`
      <section>
      <my-header></my-header>
      <my-article></my-article>
      <my-footer></my-footer>
      </section>
    `;
  }

  // private _onClick() {
  //   this.count++
  // }

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
