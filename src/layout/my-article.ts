import { LitElement, css, html } from "lit";
import { customElement } from "lit/decorators.js";
@customElement("my-article")
class MyArticle extends LitElement {
  static styles = css`
  article {
    padding: 20px 0;
    font-family: "Open Sans", sans-serif;
  }
`;

  render() {
    return html`
      <article>
        <p>
          A free soul, in this blog, will share some daily Development essay.
          reading notes, human geography
        </p>
      </article>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "my-article": MyArticle;
  }
}
