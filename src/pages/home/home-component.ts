import { OneComponent } from "../../onec";
import style from "./home-component.css";

export class HomeComponent extends OneComponent {
  // component definition
  $style = style;
  $template = {
    div: {
      _class: "container",
      _cn: [
        {
          img: {
            _src: "assets/onec.svg",
            _width: "400",
            _height: "400",
          },
        },
        {
          div: {
            _class: "subtext",
            _text: "The object-based framework",
          },
        },
        {
          "c-button": {
            _txt: "GET STARTED",
            _type: "secondary",
          },
        },
      ],
    },
  };

  constructor() {
    super();
  }
}
