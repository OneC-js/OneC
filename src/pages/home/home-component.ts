import { OneComponent, ReactiveLst } from "../../onec";
import { cardStore } from "../../stores";
import { ICard } from "../../stores/card";
import style from "./home-component.scss";

export class HomeComponent extends OneComponent {
  private cards: Array<ICard> = [];

  // component definition
  $style = style;
  $template = {
    div: {
      _class: "container",
      _cn: [
        {
          div: {
            _class: "first-view",
            _cn: [
              {
                img: {
                  _class: "logo",
                  _src: "assets/onec.svg",
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
        },
        {
          div: {
            _class: "second-view",
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
                  _class: "owner-area",
                  _cn: [
                    {
                      div: {
                        _class: "owner-group",
                        _cn: [
                          {
                            p: {
                              _class: "owner-content",
                              _text: "Released under the MIT License",
                            },
                          },
                          {
                            p: {
                              _class: "owner-content",
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
