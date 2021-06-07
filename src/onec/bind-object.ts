/**
 * This function is used to two-way bind a local variable and the element value.
 * @param {string} initState - The initial value for the element value.
 * @param {(value: string) => void} onChange - A anonymous function that provides an update value upon keyup changes.
 * @return {BindObject} A two-way binding object.
 */
export const Bind = (
  initState: string,
  onChange: (value: string) => void
): BindObject => {
  return new BindObject(initState, onChange);
};

/**
 * A two-way binding object.
 */
export class BindObject {
  private element!: HTMLElement;
  private currentState!: string;
  private onChange!: (value: string) => void;

  /**
   * Represents a two-way binding object.
   * @constructor
   * @param {string} initState - The initial value for the element value.
   * @param {(value: string) => void} onChange - A anonymous function that provides an update value upon keyup changes.
   */
  constructor(initState: string, onChange: (value: string) => void) {
    this.onChange = onChange;
    this.currentState = initState;
  }

  /**
   * This function is used to add an "keyup" event listener to the respective element.
   * @param {HTMLElement} element - The element to attach a event listener.
   * @param {string} property - The element property to retrieve upon event listener trigger.
   */
  public addListener(element: HTMLElement | any, property: string): void {
    if (element) {
      if (!this.element) {
        this.element = element;
        element.addEventListener("keyup", () => {
          const value = element[property];
          if (value) {
            this.onChange(value);
            this.currentState = value;
          }
        });
      }
    }
  }

  /**
   * This function is used to retrieve the current state of the bind.
   * @return {string} current state of the bind.
   */
  public getCurrentState(): string {
    return this.currentState;
  }
}
