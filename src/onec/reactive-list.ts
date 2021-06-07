import { ReactiveObject } from "./reactive-object";

/**
 * This function is used to reactively render a list of objects. (to be used with element children)
 * @param {(list: Array<any | ReactiveObject>) => void} list - A anonymous function that provides a list to add the reactive/static objects definitions.
 * @return {ReactiveList} A Object used to reactively render a list of reactive/static objects.
 */
export const ReactiveLst = (
  functionsList: (list: Array<any | ReactiveObject>) => void
): ReactiveList => {
  return new ReactiveList(functionsList);
};

/**
 * A Object used to reactively render a list of reactive/static objects.
 */
export class ReactiveList {
  private functionsList!: (list: Array<any | ReactiveObject>) => void;
  private elements: Array<HTMLElement> = [];
  private elementsList: Array<any> = [];

  /**
   * Represents a object to reactively render a list of reactive/static objects..
   * @constructor
   * @param {(list: Array<any | ReactiveObject>) => void} list - A anonymous function that provides a list to add the reactive/static objects definitions.
   */
  constructor(functionsList: (list: Array<any | ReactiveObject>) => void) {
    this.functionsList = functionsList;
  }

  /**
   * This function is used to get the list of reactive/static objects
   */
  public getList(): Array<any | ReactiveObject> {
    this.elementsList = [];
    this.removeGeneratedElements();
    this.functionsList(this.elementsList);
    return this.elementsList;
  }

  /**
   * This function is used to add a generated element to a list of elements pending deletion upon refreshing the ReactiveList.
   * @param {HTMLElement} element - An element scheduled for deletion upon ReactiveList refresh.
   */
  public addGeneratedElement(element: HTMLElement): void {
    if (element) this.elements.push(element);
  }

  /**
   * This function is used to delete elements upon refreshing the ReactiveList.
   */
  private removeGeneratedElements(): void {
    this.elements.forEach((element: HTMLElement | any) => {
      for (const key in element) {
        if (Object.hasOwnProperty.call(element, key)) {
          const elementValue = element[key];
          if (elementValue["__onec_element__"]) {
            elementValue["__onec_element__"].remove();
          } else {
            throw new Error("elements to be deleted missing __onec_element__.");
          }
        }
      }
    });
    this.elements = [];
  }
}
