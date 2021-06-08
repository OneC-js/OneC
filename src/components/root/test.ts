import { OneComponent, ReactiveObj } from "../../onec";
export class TestComponent extends OneComponent {
  private i = 0;
  $template = {
    _cn: [
      ReactiveObj((element) => {
        element.set({
          div: {
            _style: {
              "font-size": () => `${8 + this.i}pt`,
            },
            _text: () => "Hello World" + this.i,
          },
        });
      }),
    ],
  };

  constructor() {
    super();
    // setInterval(() => {
    //   this.i++;
    // }, 1000);
  }
}
