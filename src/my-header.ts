import { LitElement, css, html } from "lit";
import { customElement } from "lit/decorators.js";

@customElement("my-header")
class MyHeader extends LitElement {
  static styles = css`
    h1 {
      font-family: Manrope, sans-serif;
      text-align: center;
    }
  `;
  render() {
    return html` <header><h1>About me</h1></header> `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "my-header": MyHeader;
  }
}
