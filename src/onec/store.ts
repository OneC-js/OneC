/**
 * A OneC Store template.
 */
export class OneCStore {
  private bindingFunctions: Array<(state: OneCStore) => void> = [];

  /**
   * Represents a OneC Store.
   * @constructor
   */
  constructor() {}

  /**
   * This function is used to add a anonymous function using to bind the Store with a component.
   */
  public bind(bindingFunction: (state: any) => void): void {
    if (bindingFunction) {
      this.bindingFunctions.push(bindingFunction);
      if (this.bindingFunctions.length === 1) {
        this.activateVariableWatcher();
        this.updateBindings();
      }
    }
  }

  /**
   * This function is used to rerun the binding functions.
   */
  private updateBindings(): void {
    for (const bindingFunction of this.bindingFunctions) {
      bindingFunction(this);
    }
  }

  /**
   * Creates Proxy or Getter Setters to observer changes on the store class variable.
   */
  private activateVariableWatcher(): void {
    Object.getOwnPropertyNames(this).forEach((prop: any) => {
      const value = this[prop as keyof OneCStore];
      if (prop[0] !== "_" && prop[0] !== "$") {
        if (typeof value === "object") {
          this.activateVariableProxy(prop, value);
        } else {
          this.activateVariablePrimitives(prop, value);
        }
      }
    });
  }

  /**
   * Creates Getter Setters to observer changes on the store class variable.
   * @param {string} prop - A property name to a variable.
   * @param {any} value - A variable value.
   */
  private activateVariablePrimitives(prop: string, value: any): void {
    const variable = this[`_watch_${prop}` as keyof OneCStore];
    if (variable || variable === 0 || variable === false) {
      throw new Error(
        `watcher can not activate on ${prop} because _${prop} exists`
      );
    }
    this[`_watch_${prop}` as keyof OneCStore] = value;
    Object.defineProperty(this, prop, {
      get() {
        return this[`_watch_${prop}`];
      },

      set(value) {
        this[`_watch_${prop}`] = value;
        this._updateBindings();
      },
    });
  }

  /**
   * Creates Proxy to observer changes on the store class variable.
   * @param {string} prop - A property name to a variable.
   * @param {any} value - A variable value.
   */
  private activateVariableProxy(prop: string, value: any): void {
    this[`_watch_${prop}` as keyof OneCStore] = value;
    const validator = {
      get(target: any, key: any): any {
        if (typeof target[key] === "object" && target[key] !== null) {
          return new Proxy(target[key], validator);
        } else {
          return target[key];
        }
      },
      set: (target: any, prop: any, receiver: any) => {
        target[prop] = receiver;
        this.updateBindings();
        return true;
      },
    };
    this[`${prop}` as keyof OneCStore] = new Proxy(
      this[`_watch_${prop}` as keyof OneCStore],
      validator
    );
  }
}
