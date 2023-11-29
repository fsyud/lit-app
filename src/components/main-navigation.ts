import { LitElement, html, css } from "lit";
import { customElement } from "lit/decorators.js";

@customElement("main-navigation")
export class MainNavigation extends LitElement {
  static styles = [
    css`
      nav a {
        margin: 1rem;
      }
    `,
  ];
  render() {
    return html`
      <nav>
        <a href="/">Home</a>
        <a href="/3cutetimers">3cuteTimers</a>
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
