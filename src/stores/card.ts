import { OneCStore } from "../onec";

export interface ICard {
  imageUrl: string;
  title: string;
  content: string;
}
export class CardStore extends OneCStore {
  cards: Array<ICard> = [
    {
      imageUrl: "assets/code-0.svg",
      title: "Simplicity",
      content: "Do you already know JSON, CSS and JavaScript? Read the documentation and start coding your dreams into reality!",
    },
    {
      imageUrl: "assets/code-1.jpeg",
      title: "Modules",
      content: "Build your application the way you want. Assemble the puzzle using the peaces you built",
    },
    {
      imageUrl: "assets/code-2.svg",
      title: "Light",
      content: "Blazing Fast Web Components. Requiring little to no optimization on build.",
    },
  ];

  constructor() {
    super();
  }
}
