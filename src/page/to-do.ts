import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('to-do')
export class ToDo extends LitElement {
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
    'to-do': ToDo;
  }
}
