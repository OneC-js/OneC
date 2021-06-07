import style from "./card-component.css";
import { Bind, ITemplate, OneComponent, ReactiveObj } from "../../onec";

export class CardComponent extends OneComponent {
  // component variables
  private _imageUrl: string = "";
  private _title: string = "";
  private _content: string = "";

  // component definition
  $style = style;
  $template = {
    div: {
      _class: "card",
      _cn: [
        ReactiveObj((element) => {
          element.set({
            img: {
              _class: "card_image",
              _src: this._imageUrl,
            },
          });
        }),
        { p: { _class: "title", _text: () => this._title } },
        {
          div: {
            _class: "content",
            _text: () => this._content,
          },
        },
        { div: { _style: { height: "1em" } } },
      ],
    },
  };

  constructor() {
    super();
  }
}
