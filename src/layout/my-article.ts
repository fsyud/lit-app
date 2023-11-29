import { LitElement, css, html } from "lit";
import { customElement } from "lit/decorators.js";
@customElement("my-article")
class MyArticle extends LitElement {
  static styles = css`
    article {
      font-family: "Open Sans", sans-serif;
    }
    p {
      text-align: left;
      margin-bottom: 0.5rem;
    }
    ul li {
      text-align: left;
    }
  `;

  render() {
    return html`
      <article>
        <p>A developer</p>
        <p>
          A free soul, in this blog, will share some daily Development essay.
          reading notes, human geography
        </p>
        <p>some of my projects</p>
        <ul>
          <li>
            implement a mini
            <a href="https://github.com/ligdy7/swr-min" target="_blank"
              >swr-min</a
            >.
          </li>
          <li>
            some of
            <a href="https://github.com/ligdy7/ho-hooks" target="_blank"
              >react hooks</a
            >.
          </li>
          <li>
            an expandable
            <a
              href="https://github.com/ligdy7/bookmarks-quick-search"
              target="_blank"
              >Chrome bookmarks Quick Search</a
            >.
          </li>
          <li>
            A cube rotation touch program
            <a
              href="https://github.com/ligdy7/uni-3d-translate "
              target="_blank"
              >uni-3d-translate
            </a>
          </li>
          <li>
            a ssr website
            <a href="https://github.com/ligdy7/qwikbg" target="_blank"
              >qwikbg
            </a>
          </li>
          <li>...</li>
        </ul>
        <p>
          You can contact me via
          <a href="mailto: fsyud7@163.com">email</a>
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
