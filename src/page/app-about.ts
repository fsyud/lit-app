import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('app-about')
export class AppAbout extends LitElement {
  render() {
    return html`
      <div>
        todo
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'app-about': AppAbout;
  }
}
