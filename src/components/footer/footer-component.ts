import { OneComponent } from "../../onec";
import style from "./footer-component.css";

export class FooterComponent extends OneComponent {
  // component definition
  $style = style;
  $template = {
    div: {
      _class: "container",
      _cn: [
        {
          div: {
            _class: "npm-text",
            _text: "npm:"
          }
        },
        {
          div: {
            _class: "url-container",
            _text: "https://cdn.jsdelivr.net/npm/onecjs@1"
          }
        },
        {
          div: {
            _class: "copy-button",
            _text: "COPY",
          },
        },
      ]
    }
  };

  constructor() {
    super();
  }
}
