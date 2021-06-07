import { OneComponent } from "../../onec";
import style from "./header-component.css";

export class HeaderComponent extends OneComponent {
  // component definition
  $style = style;
  $template = {
    div: {
      _class: "header",
      _cn: [
        {
          div: {
            _class: "header-text",
            _text: "onec.js",
          },
        },
        {
          "c-button": {
            _class: "button-label",
            _txt: "LEARN",
            _type: "accent"
          },
        },
        {
          "c-button": {
            _class: "button-label",
            _txt: "FEATURES",
            _type: "accent"
          },
        },
        {
          "c-button": {
            _class: "button-label",
            _txt: "SUPPORT",
            _type: "accent"
          },
        },
        {
          "c-button": {
            _class: "button-label",
            _txt: "HELP",
            _type: "accent"
          },
        },
        {
          "c-button": {
            _class: "button-label",
            _txt: "Github",
          },
        },
      ],
    },
  };

  constructor() {
    super();
  }
}
