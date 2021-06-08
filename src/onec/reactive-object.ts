export enum IntElement {
  StaticElement = "__static_element__",
  ReactiveElement = "__reactive_element__",
}

/**
 * This function is used to reactively render a objects.
 * @param {(list: Array<any | ReactiveObject>) => void} list - A anonymous function that provides a list to add the reactive/static objects definitions.
 * @return {ReactiveObject} A Object used to reactively render a reactive/static objects.
 */
export const ReactiveObj = (
  functionObject: (obj: ElementObject) => void
): ReactiveObject => {
  return new ReactiveObject(functionObject);
};

/**
 * A generic object used to get and set a value.
 */
class ElementObject {
  public element!: any;

  /**
   * This function is used to set a element.
   * @param {any} element - generic object
   */
  set(element: any) {
    this.element = element;
  }

  /**
   * This function is used to get a element.
   */
  get() {
    if (this.element) {
      return this.element;
    } else {
      return {
        empty: {},
      };
    }
  }
}

/**
 * A Object used to reactively render a reactive/static objects.
 */
export class ReactiveObject {
  private functionObject!: (obj: ElementObject) => void;
  private element!: HTMLElement | any;
  private reactiveElement!: HTMLElement | any;

  /**
   * Represents a object to reactively render a reactive/static objects..
   * @constructor
   * @param {(obj: ElementObject) => void} list - A anonymous function that provides a ElementObject to set a reactive/static objects.
   */
  constructor(functionObject: (obj: ElementObject) => void) {
    this.functionObject = functionObject;
  }

  /**
   * This function is used to get the reactive/static objects
   */
  getObject() {
    let elementObject = new ElementObject();
    this.removeGeneratedElement();
    this.functionObject(elementObject);
    const element = elementObject.get();
    for (const key in element) {
      if (Object.hasOwnProperty.call(element, key)) {
        const elementValue = element[key];
        if (this.reactiveElement) {
          if (!elementValue[IntElement.ReactiveElement]) {
            elementValue[IntElement.ReactiveElement] =
              this.reactiveElement;
          }
        }
      }
    }
    return element;
  }

  /**
   * This function is used to assign a generated element pending deletion upon refreshing the ReactiveObject.
   * @param {HTMLElement} element - An element scheduled for deletion upon ReactiveObject refresh.
   */
  addGeneratedElement(element: HTMLElement) {
    this.element = element;
  }

  /**
   * This function is used to delete the generated element upon refreshing the ReactiveObject.
   */
  removeGeneratedElement() {
    for (const key in this.element) {
      if (Object.hasOwnProperty.call(this.element, key)) {
        const elementValue = this.element[key];
        if (elementValue[IntElement.ReactiveElement]) {
          this.reactiveElement = elementValue[IntElement.ReactiveElement];
        }
      }
    }
    this.element = null;
  }
}
