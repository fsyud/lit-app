import { LitElement, html, css } from "lit";
import { customElement } from "lit/decorators.js";
import "./../components/grid-click.ts";

@customElement("decompression-times")
export class DecompressionTimes extends LitElement {
  static styles = css`
    ul li {
      list-style: none;
    }
  `;

  render() {
    return html` <section>
      <ul>
        <li>
          <motion-grid></motion-grid>
        </li>
      </ul>
    </section>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "decompression-times": DecompressionTimes;
  }
}
