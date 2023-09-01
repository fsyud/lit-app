import { LitElement, css, html } from "lit";
import { customElement, state } from "lit/decorators.js";
@customElement("my-article")
class MyArticle extends LitElement {

  render() {
    return html`
      <article>
        <p>
          A free soul, in this blog, will share some daily Development essay.
          reading notes, human geography
        </p>
        <div>
        </div>
      </article>
    `;
  }

  static styles = css`
  article {
    padding: 20px 0;
    font-family: "Open Sans", sans-serif;
  }
`;
}

declare global {
  interface HTMLElementTagNameMap {
    "my-article": MyArticle;
  }
}
