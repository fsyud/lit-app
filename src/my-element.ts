import { LitElement, html, css } from "lit";
import { Router } from "@lit-labs/router";
import { customElement } from "lit/decorators.js";

import "./page/app-home.ts";
import "./page/to-do.ts"
import "./page/app-about.ts";

import "./components/main-navigation.ts";
import "./components/buncha-timers.ts";

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement("my-element")
export class MyElement extends LitElement {
  static styles = css`
  :host {
    max-width: 1280px;
    margin: 0 auto;
    padding: 2rem;
    text-align: center;
    font-size: 1.5em;
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
      path: "/3cutetimers",
      render: () => html`<buncha-timers></buncha-timers>`,
    },
    { path: "/to-do", render: () => html`<app-about></app-about>` },
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
    "my-element": MyElement;
  }
}
