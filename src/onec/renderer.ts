import { BindObject } from "./bind-object";
import { ReactiveList } from "./reactive-list";
import { IntElement, ReactiveObject } from "./reactive-object";

// SECTION: Component

type IAnonymous = () => string | number | null | undefined | void;

export interface ITemplate {
  a?: IElement;
  b?: IElement;
  u?: IElement;
  p?: IElement;
  i?: IElement;
  s?: IElement;
  q?: IElement;
  rb?: IElement;
  rp?: IElement;
  rt?: IElement;
  em?: IElement;
  h1?: IElement;
  h2?: IElement;
  h3?: IElement;
  h4?: IElement;
  h5?: IElement;
  h6?: IElement;
  hr?: IElement;
  li?: IElement;
  ul?: IElement;
  ol?: IElement;
  dl?: IElement;
  dt?: IElement;
  dd?: IElement;
  br?: IElement;
  tr?: IElement;
  th?: IElement;
  td?: IElement;
  dfn?: IElement;
  bdo?: IElement;
  bdi?: IElement;
  sub?: IElement;
  col?: IElement;
  sup?: IElement;
  svg?: IElement;
  map?: IElement;
  ins?: IElement;
  del?: IElement;
  rtc?: IElement;
  kbd?: IElement;
  pre?: IElement;
  img?: IElement;
  var?: IElement;
  wbr?: IElement;
  nav?: IElement;
  div?: IElement;
  cite?: IElement;
  menu?: IElement;
  slot?: IElement;
  form?: IElement;
  math?: IElement;
  area?: IElement;
  abbr?: IElement;
  code?: IElement;
  data?: IElement;
  main?: IElement;
  time?: IElement;
  html?: IElement;
  base?: IElement;
  head?: IElement;
  link?: IElement;
  body?: IElement;
  meta?: IElement;
  ruby?: IElement;
  mark?: IElement;
  samp?: IElement;
  span?: IElement;
  title?: IElement;
  style?: IElement;
  aside?: IElement;
  tbody?: IElement;
  tfoot?: IElement;
  table?: IElement;
  thead?: IElement;
  meter?: IElement;
  input?: IElement;
  audio?: IElement;
  track?: IElement;
  param?: IElement;
  video?: IElement;
  embed?: IElement;
  label?: IElement;
  small?: IElement;
  strong?: IElement;
  button?: IElement;
  legend?: IElement;
  option?: IElement;
  output?: IElement;
  footer?: IElement;
  figure?: IElement;
  iframe?: IElement;
  object?: IElement;
  portal?: IElement;
  source?: IElement;
  canvas?: IElement;
  script?: IElement;
  header?: IElement;
  select?: IElement;
  dialog?: IElement;
  summary?: IElement;
  address?: IElement;
  details?: IElement;
  picture?: IElement;
  caption?: IElement;
  section?: IElement;
  article?: IElement;
  noscript?: IElement;
  fieldset?: IElement;
  datalist?: IElement;
  colgroup?: IElement;
  optgroup?: IElement;
  textarea?: IElement;
  progress?: IElement;
  template?: IElement;
  figcaption?: IElement;
  blockquote?: IElement;
}

export interface IElement {
  _id?: string | IAnonymous;
  _src?: string | IAnonymous;
  _text?: string | IAnonymous;
  _style?: string | IAnonymous;
  _class?: string | IAnonymous;
  $click?: IAnonymous;
  $afterscriptexecute?: IAnonymous;
  $auxclick?: IAnonymous;
  $beforescriptexecute?: IAnonymous;
  $blur?: IAnonymous;
  $compositionend?: IAnonymous;
  $compositionstart?: IAnonymous;
  $compositionupdate?: IAnonymous;
  $contextmenu?: IAnonymous;
  $copy?: IAnonymous;
  $cut?: IAnonymous;
  $dblclick?: IAnonymous;
  $DOMActivate?: IAnonymous;
  $DOMMouseScroll?: IAnonymous;
  $error?: IAnonymous;
  $focusin?: IAnonymous;
  $focusout?: IAnonymous;
  $focus?: IAnonymous;
  $fullscreenchange?: IAnonymous;
  $fullscreenerror?: IAnonymous;
  $gesturechange?: IAnonymous;
  $gestureend?: IAnonymous;
  $gesturestart?: IAnonymous;
  $keydown?: IAnonymous;
  $keypress?: IAnonymous;
  $keyup?: IAnonymous;
  $mousedown?: IAnonymous;
  $mouseenter?: IAnonymous;
  $mouseleave?: IAnonymous;
  $mousemove?: IAnonymous;
  $mouseout?: IAnonymous;
  $mouseover?: IAnonymous;
  $mouseup?: IAnonymous;
  $mousewheel?: IAnonymous;
  $msContentZoom?: IAnonymous;
  $MSGestureChange?: IAnonymous;
  $MSGestureEnd?: IAnonymous;
  $MSGestureHold?: IAnonymous;
  $MSGestureStart?: IAnonymous;
  $MSGestureTap?: IAnonymous;
  $MSInertiaStart?: IAnonymous;
  $MSManipulationStateChanged?: IAnonymous;
  $overflow?: IAnonymous;
  $paste?: IAnonymous;
  $scroll?: IAnonymous;
  $select?: IAnonymous;
  $show?: IAnonymous;
  $touchcancel?: IAnonymous;
  $touchend?: IAnonymous;
  $touchmove?: IAnonymous;
  $touchstart?: IAnonymous;
  $underflow?: IAnonymous;
  $webkitmouseforcechanged?: IAnonymous;
  $webkitmouseforcedown?: IAnonymous;
  $webkitmouseforceup?: IAnonymous;
  $webkitmouseforcewillbegin?: IAnonymous;
  $wheel?: IAnonymous;
  _cn?: Array<ITemplate | ReactiveObject> | ReactiveList;
}

/**
 * A OneC component template to creating a WebComponent.
 */
export class OneComponent extends HTMLElement {
  public $style: string = "";
  public $template: any = {};
  private templateRaw = "";
  private template: HTMLElement | any = document.createElement("template");

  /**
   * Represents a OneC component to used for creating a WebComponent.
   * @constructor
   */
  constructor() {
    super();
  }

  /**
   * This function is used to force update the template of the component.
   */
  public updateTemplate(): void {
    this.renderTemplate(
      <HTMLElement>(<unknown>this.shadowRoot),
      this.$template
    );
  }

  /**
   * This function is used to render the template of the component.
   * @param {HTMLElement} parentElement - The parent element where a child element will be created or an attribute, function are applied.
   * @param {any} objTemplate - A json object containing the elements, attributes and functions to be rendered to the template.
   */
  private renderTemplate(
    parentElement: HTMLElement,
    objTemplate: any,
    type: string = IntElement.StaticElement
  ): void {
    console.log("[template] -> ", this.$template);
    if (parentElement && objTemplate) {
      for (const key in objTemplate) {
        if (Object.hasOwnProperty.call(objTemplate, key)) {
          const value = objTemplate[key];
          if (key[0] === "_") {
            this.renderProperty(parentElement, key, value);
          } else if (key[0] === "$") {
            this.renderListener(parentElement, objTemplate, key, value);
          } else {
            this.renderElement(parentElement, key, value, type);
          }
        }
      }
    } else {
      throw new Error("parent element or object template not found.");
    }
  }

  private renderProperty(
    parentElement: HTMLElement,
    key: string,
    value: object | ReactiveList | Array<ReactiveObject> | string
  ): void {
    switch (key) {
      case "_text":
        if (typeof value === "function") {
          parentElement.innerHTML = value();
        } else if (typeof value === "string") {
          parentElement.innerHTML = value;
        }
        break;
      case "_style":
        let cssObject = null;
        if (typeof value === "function") {
          cssObject = value();
        } else {
          cssObject = value;
        }
        for (const cssProperty in cssObject) {
          if (Object.hasOwnProperty.call(value, cssProperty)) {
            const cssValue = (<any>value)[cssProperty];
            if (typeof cssValue === "function") {
              parentElement.style.setProperty(cssProperty, cssValue());
            } else {
              parentElement.style.setProperty(cssProperty, cssValue);
            }
          }
        }
        break;
      case "_cn":
        if (value instanceof ReactiveList) {
          const children = value.getList();
          if (children) {
            children.forEach((child: ReactiveObject) => {
              if (child instanceof ReactiveObject) {
                const element = child.getObject();
                this.renderTemplate(
                  parentElement,
                  element,
                  IntElement.ReactiveElement
                );
                value.addGeneratedElement(element);
              } else {
                this.renderTemplate(parentElement, child);
                value.addGeneratedElement(child);
              }
            });
          }
        } else if (value instanceof Array) {
          value.forEach((child: ReactiveObject | any) => {
            if (child instanceof ReactiveObject) {
              const element = child.getObject();
              this.renderTemplate(
                parentElement,
                element,
                IntElement.ReactiveElement
              );
              console.log("[element] -> ", element);
              child.addGeneratedElement(element);
            } else {
              this.renderTemplate(parentElement, child);
            }
          });
        }
        break;
      default:
        if (
          key !== IntElement.ReactiveElement &&
          key !== IntElement.StaticElement
        ) {
          if (value instanceof BindObject) {
            parentElement.setAttribute(
              key.substring(1, key.length),
              value.getCurrentState()
            );
            value.addListener(parentElement, key.substring(1, key.length));
          } else if (typeof value === "string") {
            parentElement.setAttribute(key.substring(1, key.length), value);
          } else if (typeof value === "function") {
            parentElement.setAttribute(key.substring(1, key.length), value());
          }
        }
        break;
    }
  }

  private renderListener(
    parentElement: HTMLElement,
    objTemplate: any,
    key: string,
    value: (event: Event) => void
  ): void {
    if (
      !objTemplate[`__onec_event_listener__${key.substring(1, key.length)}`]
    ) {
      objTemplate[`__onec_event_listener__${key.substring(1, key.length)}`] =
        true;
      parentElement.addEventListener(key.substring(1, key.length), (event) => {
        value(event);
        event.stopPropagation();
        this.updateTemplate();
      });
    }
  }

  private renderElement(
    parentElement: HTMLElement,
    key: string,
    value: any,
    type: any
  ): void {
    if (type === IntElement.ReactiveElement) {
      this.renderReactiveElement(parentElement, key, value);
    } else if (type === IntElement.StaticElement) {
      this.renderStaticElement(parentElement, key, value);
    } else {
      throw new Error("Render element type unknown.");
    }
  }

  private renderReactiveElement(
    parentElement: HTMLElement,
    key: string,
    value: any
  ): void {
    if (value[IntElement.ReactiveElement] instanceof OnecElement) {
      const tempElement = document.createElement(key);
      value[IntElement.ReactiveElement].replaceWith(tempElement);
      this.renderTemplate(
        value[IntElement.ReactiveElement].getElement(),
        value
      );
    } else {
      const tempElement = document.createElement(key);
      parentElement.appendChild(tempElement);
      value[IntElement.ReactiveElement] = new OnecElement(tempElement);
      this.renderTemplate(tempElement, value);
    }
  }

  private renderStaticElement(
    parentElement: HTMLElement,
    key: string,
    value: any
  ): void {
    if (value[IntElement.StaticElement] instanceof OnecElement) {
      this.renderTemplate(value[IntElement.StaticElement].getElement(), value);
    } else {
      const tempElement = document.createElement(key);
      parentElement.appendChild(tempElement);
      value[IntElement.StaticElement] = new OnecElement(tempElement);
      this.renderTemplate(tempElement, value);
    }
  }

  /**
   * This function is apply the template to the shadow root. (made use by the OneCRenderer function)
   */
  private oneFactory(): void {
    if (this.template && this.shadowRoot) {
      this.template.innerHTML = "";
      this.shadowRoot.innerHTML = "";
      this.template.innerHTML = `<style>${this.$style.toString()}</style>${
        this.templateRaw
      }`;
      this.shadowRoot.appendChild(this.template.content.cloneNode(true));
    }
    this.renderTemplate(
      <HTMLElement>(<unknown>this.shadowRoot),
      this.$template
    );
  }
}

// SECTION:
class OnecElement {
  private element!: HTMLElement;

  constructor(element: HTMLElement) {
    this.element = element;
  }

  public getElement(): HTMLElement {
    return this.element;
  }

  public replaceWith(element: HTMLElement): void {
    this.element.replaceWith(element);
    this.element = element;
  }
}

// SECTION: Renderer
export interface IComponent {
  selector: string;
  definition: CustomElementConstructor | any;
}

/**
 * This function is used to render all the application components so there are accessible as WebComponents.
 * @param {Array<IComponent>} components - A list of the components to be made into WebComponents.
 */
export const OneC = (components: Array<IComponent>): void => {
  components.forEach((component) => {
    OneCRenderer(component);
  });
};

/**
 * This function is used to render a component so that it is accessible as a WebComponent.
 * @param {IComponent} component - A component to be made into WebComponent.
 */
export const OneCRenderer = (component: IComponent): void => {
  window.customElements.define(
    component.selector,
    /**
     * A generic template to create a WebComponent. (Responsible for setup the ShadowRoot, Factory, VariableWatchers and lifeCycleHooks)
     */
    <any>class TmpComponent extends component.definition {
      /**
       * Represents a component class to be used for creating a WebComponent.
       * @constructor
       */
      constructor() {
        super();
        this.attachShadow({ mode: "open" });
        this.oneFactory();
        this.activateVariableWatchers();
        this.lifeCycleHooks();
      }

      /**
       * The series of changes in the life of a component.
       */
      private lifeCycleHooks(): void {
        // TODO: fix lifeCycleHooks
        new MutationObserver((mutations) => {
          if (this.OnInit) {
            this.OnInit();
          }
        }).observe(document, {
          attributes: false,
          childList: true,
          characterData: false,
          subtree: true,
        });
        this.activateAttributeWatchers();
      }

      /**
       * Creates MutationObserver to observer changes on the component attributes.
       */
      private activateAttributeWatchers(): void {
        Object.getOwnPropertyNames(this).forEach((prop) => {
          if (
            prop[0] !== "$" &&
            prop.substring(0, 7) !== "_watch_" &&
            prop !== "template" &&
            prop !== "templateRaw" &&
            prop !== "_text"
          ) {
            const attributeValue = this.getAttribute(
              prop.substring(1, prop.length)
            );
            if (attributeValue) {
              if (typeof attributeValue === "function") {
                this[prop] = attributeValue();
              } else {
                this[prop] = attributeValue;
              }
            }
            this.updateTemplate();

            // TODO: requires optimization. (issue: loops twice on [mutations.forEach])
            new MutationObserver((mutations) => {
              mutations.forEach((mutation) => {
                if (mutation.type == "attributes") {
                  const attributeValue = this.getAttribute(
                    prop.substring(1, prop.length)
                  );
                  if (attributeValue) {
                    if (typeof attributeValue === "function") {
                      this[prop] = attributeValue();
                    } else {
                      this[prop] = attributeValue;
                    }
                  }
                  this.updateTemplate();
                }
              });
            }).observe(<any>this, {
              attributes: true,
            });
          }
        });
      }

      /**
       * Creates Proxy or Getter Setters to observer changes on the component class variable.
       */
      private activateVariableWatchers(): void {
        Object.getOwnPropertyNames(this).forEach((prop) => {
          const value = this[prop];
          if (prop[0] === "_") {
          }
          if (prop[0] === "$") {
          } else {
            if (typeof value === "object") {
              this.activateVariableProxy(prop, value);
            } else {
              this.activateVariablePrimitives(prop, value);
            }
          }
        });
      }

      /**
       * Creates Getter Setters to observer changes on the component class variable.
       * @param {string} prop - A property name to a variable.
       * @param {any} value - A variable value.
       */
      private activateVariablePrimitives(prop: string, value: any): void {
        if (
          this[`_watch_${prop}`] ||
          this[`_watch_${prop}`] === 0 ||
          this[`_watch_${prop}`] === false
        ) {
          throw new Error(
            `watcher can not activate on ${prop} because _${prop} exists`
          );
        }
        this[`_watch_${prop}`] = value;
        Object.defineProperty(this, prop, {
          get() {
            return this[`_watch_${prop}`];
          },

          set(value) {
            this[`_watch_${prop}`] = value;
            this.updateTemplate();
          },
        });
      }

      /**
       * Creates Proxy to observer changes on the component class variable.
       * @param {string} prop - A property name to a variable.
       * @param {any} value - A variable value.
       */
      private activateVariableProxy(prop: string, value: any): void {
        this[`_watch_${prop}`] = value;
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
            this.updateTemplate();
            return true;
          },
        };
        this[`${prop}`] = new Proxy(this[`_watch_${prop}`], validator);
      }
    }
  );
};
