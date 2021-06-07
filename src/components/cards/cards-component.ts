import { cardStore } from "../../stores";
import style from "./cards-component.css";
import { ICard } from "../../stores/card";
import { OneComponent, ReactiveLst } from "../../onec";

export class CardsComponent extends OneComponent {
  // variables
  private cards: Array<ICard> = [];

  // component definition
  $style = style;
  $template = {
    div: {
      _class: "main-area",
      _cn: [
        {
          div: {
            _class: "card-area",
            _cn: ReactiveLst((elements) => {
              for (const card of this.cards) {
                elements.push({
                  "c-card": {
                    _imageUrl: card.imageUrl,
                    _title: card.title,
                    _content: card.content,
                  },
                });
              }
            }),
          },
        },
        {
          div: {
            _class: "subtext-area",
            _cn: [
              {
                div: {
                  _class: "subtext",
                  _cn: [
                    {
                      p: {
                        _class: "subtext-content",
                        _text: "Released under the MIT License",
                      },
                    },
                    {
                      p: {
                        _class: "subtext-content",
                        _text: "Copyright © 2020-2021 Nigel Matyukira",
                      },
                    },
                  ],
                },
              },
            ],
          },
        },
      ],
    },
  };

  constructor() {
    super();
    cardStore.bind((data) => {
      this.cards = data.cards;
    });
  }
}
