import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { AnimateController, animate, flyBelow, fade } from "@lit-labs/motion";
import { styles } from "./styles.ts";

@customElement("my-header")
class MyHeader extends LitElement {
  static styles = styles;

  lit = ["F", "S", "Y", "U", "D"];

  @property({ type: Array }) letters = this.lit;

  duration = 2000;

  controller = new AnimateController(this, {
    defaultOptions: {
      keyframeOptions: {
        duration: this.duration,
        fill: "backwards",
      },
    },
    onComplete: () => this.changeLayout(),
  });

  render() {
    const delayTime = this.duration / (this.letters.length * 2.5);

    return html`
      <main>
        ${this.letters?.map(
          (letter, i) =>
            html`<span
              class="letter"
              ${animate({
                keyframeOptions: {
                  delay: i * delayTime,
                },
                in: fade,
                out: flyBelow,
              })}
              >${letter}</span
            >`
        )}
      </main>
    `;
  }

  changeLayout() {
    this.letters = this.letters.length ? [] : this.lit;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "my-header": MyHeader;
  }
}
