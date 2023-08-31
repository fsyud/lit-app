import { LitElement, css, html } from "lit";
import { customElement, property } from "lit/decorators.js";
// import litLogo from './assets/lit.svg'
// import viteLogo from '/vite.svg'

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement("my-element")
export class MyElement extends LitElement {
  /**
   * Copy for the read the docs hint.
   */
  @property()
  docsHint = "Click on the Vite and Lit logos to learn more";

  /**
   * The number of times the button has been clicked.
   */
  @property({ type: Number })
  count = 0;

  render() {
    return html`
      <section>
        <div class="title">fsyud</div>
        <p>
          A free soul, in this blog, will share some daily Development essay.
          reading notes, human geography
        </p>
      </section>

      <!-- <p class="read-the-docs">${this.docsHint}</p> -->
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
    .title {
      font-size: 22px;
    }
  `;
}

declare global {
  interface HTMLElementTagNameMap {
    "my-element": MyElement;
  }
}
