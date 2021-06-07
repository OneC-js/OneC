import { OneComponent } from "../../onec";
import style from "./footer-component.scss";

export class FooterComponent extends OneComponent {
  // component definition
  $style = style;
  $template = {
    div: {
      _class: "container",
      div: {
        _class: "footer-container",
        _cn: [
          {
            div: {
              _class: "cdn-button",
              _text: "CDN:",
            },
          },
          {
            div: {
              _class: "url-container",
              _text: "https://cdn.jsdelivr.net/npm/onecjs@1",
            },
          },
          {
            div: {
              _class: "copy-button",
              _text: "COPY",
            },
          },
        ],
      },
    },
  };

  constructor() {
    super();
  }
}
