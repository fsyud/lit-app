import { LitElement, html, css } from "lit";
import { customElement } from "lit/decorators.js";

@customElement("main-navigation")
export class MainNavigation extends LitElement {
  static styles = [
    css`
      nav a {
        margin: 0.5rem;
        font-family: "Open Sans", sans-serif;
      }
    `,
  ];
  render() {
    return html`
      <nav>
        <a href="/">Home</a>
        <a href="/decompression-times">DecompressionTimes</a>
        <a href="/to-do">ToDo</a>
      </nav>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "main-navigation": MainNavigation;
  }
}
