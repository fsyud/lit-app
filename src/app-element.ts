import { LitElement, html, css } from "lit";
import { Router } from "@lit-labs/router";
import { customElement } from "lit/decorators.js";

import "./page/app-home.ts";
import "./page/to-do.ts"
import "./page/decompression-times.ts";

import "./components/main-navigation.ts";
import "./page/decompression-times.ts"
/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement("app-element")
export class AppElement extends LitElement {
  static styles = css`
  :host {
    max-width: 800px;
    margin: 0 auto;
    padding: 2rem;
    text-align: center;
    font-size: 1rem;
    font-family: "JetBrains Mono", monospace;
  }
`;
  private router = new Router(this, [
    {
      path: "/",
      render: () => {
        console.log("rendered default route");
        return html`<app-home></app-home>`;
      },
    },
    {
      path: "/decompression-times",
      render: () => html`<decompression-times></decompression-times>`,
    },
    { path: "/to-do", render: () => html`<to-do></to-do>` },
  ]);

  render() {
    return html`
      <main-navigation></main-navigation>
      <main>${this.router.outlet()}</main>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "app-element": AppElement;
  }
}
