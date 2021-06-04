import { OneComponent } from "../../onec";
export class RootComponent extends OneComponent {
  $template = {
    "c-header": {},
    // "c-cards": {},
    div: {
      _style: {
        display: "grid",
        height: "75%",
        "align-items": "center",
        "justify-items": "center",
      },
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
            _text: "The object-based framework",
            _style: {
              "font-size": "20pt",
            },
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
