function $parcel$exportWildcard(dest, source) {
  Object.keys(source).forEach(function(key) {
    if (key === 'default' || key === '__esModule' || dest.hasOwnProperty(key)) {
      return;
    }

    Object.defineProperty(dest, key, {
      enumerable: true,
      get: function get() {
        return source[key];
      }
    });
  });

  return dest;
}
function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
var $1d5f27f301ff7206$exports = {};

$parcel$export($1d5f27f301ff7206$exports, "Button", () => $1d5f27f301ff7206$export$353f5b6fc5456de1);
const $e5f9c53905dfbbf9$export$a5a6e0b888b2c992 = {
    prefix: 'x'
};


class $db5cca362cd2ddea$export$16fa2f45be04daa8 extends HTMLElement {
    constructor(){
        super();
        this._root = this.attachShadow({
            mode: 'open'
        });
    }
    /* Returns html. */ get html() {
        return this._root.innerHTML;
    }
    /* Sets html. */ set html(html) {
        while(this._root.firstChild)this._root.firstChild.remove();
        this._root.innerHTML = html || '' // To avoid showing 'undefined'.
        ;
    }
    /* Adds a component to slot in this component. */ addComponent(component, slot = '') {
        if (!this._root.querySelector(`slot[name="${slot}"]`)) throw new Error(`Slot '${slot}' could not be found.`);
        component.slot = slot;
        this.appendChild(component);
    }
    removeComponent(component) {
        if (!this.querySelectorAll('*').includes(component)) throw new Error(`Attempted to remove non-added component.`);
        component.removeAttribute('slot');
        component.remove();
    }
    /* Removes component added to slot. */ clear(slot) {
        this.getComponents(slot).forEach((component)=>this.removeComponent(component)
        );
    }
    /* Returns components added to slot. */ getComponents(slot) {
        const slotElement = this._root.querySelector(`slot[name="${slot}"]`);
        if (!slotElement) throw new Error(`Slot '${slot}' could not be found.`);
        return slotElement.assignedElements();
    }
    /* Returns array of slot names. Unnamed slot's name is ''.*/ getSlots() {
        return [
            ...this._root.querySelectorAll(`slot`)
        ].map((element)=>element.name
        );
    }
    /* Hides component */ hide() {
        this.style.display = 'none';
    }
    /* Shows component */ show() {
        this.style.display = 'initial';
    }
}


/* Component for button with ripple effect */ class $1d5f27f301ff7206$export$353f5b6fc5456de1 extends $db5cca362cd2ddea$export$16fa2f45be04daa8 {
    constructor({ text: text  }){
        super();
        this.html = `
    <style>
      input[type="button"],
      input[type="submit"],
      input[type="reset"],
      button {
        overflow: hidden;
        background-color: var(--themeColor);
        color: var(--white);
        font-family: var(--fontFamily);
        font-size: 16px;
        text-transform: uppercase;
        padding: 12px 18px;
        border: none;
        border-radius: 2px;
        box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
        outline: none;
      }

      input[type="button"]:hover,
      input[type="submit"]:hover,
      input[type="reset"]:hover,
      button:hover {
        background-color: var(--themeColorAccent);
      }

      button {
        /* Enable position absolute for span ripple element: */
        position: relative;
        cursor: pointer;
        transition: background 400ms;
      }

      span.ripple {
        position: absolute;
        background-color: rgba(255, 255, 255, 0.7);
        /* Make ripples circular: */
        border-radius: 50%;
        /* Ensure that each ripple emerges from nothing: */
        transform: scale(0);
        animation: rippleEffect 600ms linear;
        /* top, left, width, and height are set from code. */
      }

      @keyframes rippleEffect {
        from {
          transform: scale(0);
          opacity: 1;
        }
        to {
          transform: scale(4);
          opacity: 0;
        }
      }
    </style>
    <button></button>
    `;
        // HTML elements:
        this._buttonElement = this._root.querySelector('button');
        // Events:
        this._buttonElement.addEventListener('click', this._createRipple.bind(this));
        // Args:
        this.text = text;
    }
    get text() {
        return this._buttonElement.textContent;
    }
    set text(text) {
        this._buttonElement.textContent = text;
    }
    _createRipple(event) {
        const oldRippleElement = this._root.querySelector('span.ripple');
        if (oldRippleElement) oldRippleElement.remove();
        const rippleElement = document.createElement('span');
        rippleElement.classList.add("ripple");
        // Set rippleElement size (ripple diameter):
        const size = Math.max(this._buttonElement.clientWidth, this._buttonElement.clientHeight);
        rippleElement.style.width = rippleElement.style.height = `${size}px`;
        // Position rippleElement:
        rippleElement.style.left = `${event.clientX - this._buttonElement.offsetLeft - size / 2}px`;
        rippleElement.style.top = `${event.clientY - this._buttonElement.offsetTop - size / 2}px`;
        this._buttonElement.appendChild(rippleElement);
    }
}
const $1d5f27f301ff7206$var$componentTag = `${$e5f9c53905dfbbf9$export$a5a6e0b888b2c992.prefix}-button`;
customElements.get($1d5f27f301ff7206$var$componentTag) || customElements.define($1d5f27f301ff7206$var$componentTag, $1d5f27f301ff7206$export$353f5b6fc5456de1);


var $69d79346054b6627$exports = {};

$parcel$export($69d79346054b6627$exports, "Dot", () => $69d79346054b6627$export$d046b3c4a416f60d);


/* Component for simple filled circle. */ class $69d79346054b6627$export$d046b3c4a416f60d extends $db5cca362cd2ddea$export$16fa2f45be04daa8 {
    #size;
    constructor(){
        super();
        //<link rel="stylesheet" href="assets/components/dot.css">
        this.html = `
    <style>
      span {
        display: inline-block;
        width: 48px;
        height: 48px;
        border-radius: 50%;
        background-color: var(--themeColor, red);
      }
    </style>
    <span></span>
    `;
        this._dotElement = this._root.querySelector('span');
    }
    /* Returns dot color. */ get color() {
        return this._dotElement.style.backgroundColor;
    }
    /* Sets dot color. */ set color(color) {
        this._dotElement.style.backgroundColor = color;
    }
    /* Returns dot size. */ get size() {
        return this.#size;
    }
    /* Sets dot size. */ set size(size) {
        this.#size = size;
        this._dotElement.style.width = size;
        this._dotElement.style.height = size;
    }
}
const $69d79346054b6627$var$componentTag = `${$e5f9c53905dfbbf9$export$a5a6e0b888b2c992.prefix}-dot`;
customElements.get($69d79346054b6627$var$componentTag) || customElements.define($69d79346054b6627$var$componentTag, $69d79346054b6627$export$d046b3c4a416f60d);


var $476c73442f2e4270$exports = {};

$parcel$export($476c73442f2e4270$exports, "Index1", () => $476c73442f2e4270$export$9234d5bea7aeae5f);


/* Implements index component with left slide panel. */ class $476c73442f2e4270$export$9234d5bea7aeae5f extends $db5cca362cd2ddea$export$16fa2f45be04daa8 {
    constructor(){
        super({});
        this.html = `
    <style>    
    :host {
      --headerHeight: 70px;
      --sideWidth: 300px;
      --sideTransitionTime: 400ms;
    }

    .page {
      display: flex;
      flex-direction: column;
      min-height: 100vh;
      overflow: hidden;
    }
    
    header {
      position: sticky;
      top: 0;
      height: var(--headerHeight);
      display: flex;
      align-items: center;
      color: var(--baseColor, white);
      background-color: var(--themeColor, red);
      padding: 0 32px;
      box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
    }
    
    .menu {
      height: 100%;
      display: flex;
      align-items: center;
      font-size: 32px;
      background-color: transparent;
      padding: 0 8px;
      border: none;
      transition: background-color 400ms;
    }
    
    .menu:hover {
      background-color: var(--themeColorAccent, pink);
    }

    .menu > svg {
      width: 32px;
      height: 32px;
    }

    .menu > svg > path {
      fill: var(--baseColor, white);
      stroke: transparent;
    }

    a.home {
      display: flex;
      align-items: center;
      height: 100%;
      text-decoration: none;
      padding: 0 8px;
      transition: background-color 400ms;
    }
    
    .logo {
      height: 60%;
      margin: 0 4px 0 0;
    }
    
    .title {
      font-family: var(--fontFamily);
      font-size: 24px;
      font-weight: 600;
      padding: 0;
      margin: 0 0 0 4px;
    }
    
    slot[name="top"] {
      height: 100%;
      margin-left: auto;
      display: flex;
      justify-content: flex-end;
    }
    
    main {
      flex-grow: 1;
      padding: 48px 32px;
      display: flex;
      flex-direction: column;
      align-items: center;
      row-gap: 16px;
    }
    
    footer {
      display: flex;
      justify-content: center;
    }
    
    .side {
      position: fixed;
      top: 0;
      left: 0;
      height: 100%;
      width: var(--sideWidth);
      z-index: 10;
      display: flex;
      flex-direction: column;
      row-gap: 16px;
      background-color: white;
      box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;
      transition: transform var(--sideTransitionTime) ease-out;
    }
    
    .side.closed {
      transform: translateX(-100%);
    }
    
    button.close {
      align-self: flex-end;
      background-color: transparent;
      padding: 8px;
      border: none;
      margin-top: 8px;
    }

    button.close > svg {
      width: 24px;
      height: 24px;
    }

    button.close > svg > path {
      fill: darkGray;
      stroke: transparent;
      transition: fill 400ms;
    }

    button.close:hover > svg > path {
      fill: dimGray;
    }
    
    slot[name="side"] {
      display: flex;
      flex-direction: column;
    }

    @media (min-width: 600px) {
      .side {
        top: var(--headerHeight);
      }
    
      main {
        margin-left: var(--sideWidth);
        transition: margin-left var(--sideTransitionTime) ease-out;
      }
    
      .side.closed~main {
        margin-left: 0;
      }
    }
    </style>
    <div class="page">
      <header>
        <a class="menu toggle">
          <svg viewBox="0 0 24 24">
            <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/>
          </svg>
        </a>
        <a href="#" class="home">
          <img src="" alt="" class="logo">
          <h2 class="title">Title</h2>
        </a>
        <slot name="top" class="top close"></slot>
      </header>
      <div class="side">
        <button class="close">
          <svg viewBox="0 0 24 24">
            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"/>
          </svg>
        </button>        
        <slot name="side" class="close"></slot>
      </div>
      <main class="close">
        <slot name="main"></slot>
      </main>
      <footer>
        <slot name="footer"></slot>
      </footer>
    <div>
    `;
        // HTML elements:
        this._logoElement = this._root.querySelector('.logo');
        this._titleElement = this._root.querySelector('.title');
        this._sideElement = this._root.querySelector('.side');
        this._sideCloseElements = this._root.querySelectorAll('.close');
        this._sideToggleElements = this._root.querySelectorAll('.toggle');
        // Events:
        this._sideCloseElements.forEach((element)=>{
            element.addEventListener('click', (event)=>{
                this.closePanel();
            });
        });
        this._sideToggleElements.forEach((element)=>{
            element.addEventListener('click', (event)=>{
                this.togglePanel();
            });
        });
    }
    get logo() {
        return this._logoElement.src;
    }
    set logo(url) {
        this._logoElement.src = url;
    }
    get title() {
        return this._titleElement.textContent;
    }
    set title(text) {
        this._titleElement.textContent = text;
    }
    closePanel() {
        this._sideElement.classList.add('closed');
    }
    openPanel() {
        this._sideElement.classList.remove('closed');
    }
    togglePanel() {
        if (this._sideElement.classList.contains('closed')) this.openPanel();
        else this.closePanel();
    }
    // TODO: Somehow activate from the component's 'focus component state'.
    linkFocusHandler(event) {
        const selected = 42;
        const siblings = this.querySelectorAll(`a[slot=${component.slot}]`);
        siblings.forEach((component)=>component.deselect()
        );
        selected.select();
    }
}
const $476c73442f2e4270$var$componentTag = `${$e5f9c53905dfbbf9$export$a5a6e0b888b2c992.prefix}-index-1`;
customElements.get($476c73442f2e4270$var$componentTag) || customElements.define($476c73442f2e4270$var$componentTag, $476c73442f2e4270$export$9234d5bea7aeae5f);


var $6f2c1ab3e7192777$exports = {};

$parcel$export($6f2c1ab3e7192777$exports, "Navlink", () => $6f2c1ab3e7192777$export$8de7bebd782d31ee);


/* 
TODO:
- Deal with icons.
*/ /* Component navigation links. */ class $6f2c1ab3e7192777$export$8de7bebd782d31ee extends $db5cca362cd2ddea$export$16fa2f45be04daa8 {
    constructor({ href: href , text: text  }){
        super();
        this.html = `
    <style>
    :host([horizontal]) a {
        font-family: var(--fontFamily);
        font-size: 16px;
        text-decoration: none;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        white-space: nowrap;
        color: white;
        padding: 0 8px;          
        transition: background-color 200ms;
      }
      
      :host([horizontal]) a:hover {
        background-color: var(--themeColorAccent);
      }
      
      :host([horizontal]) hr {
        height: 0;
        background-color: white;
        border: 2px solid white;
        margin-top: -2px;
        transform: scaleX(0);
      }

      :host([horizontal]) a:active ~ hr {
        transition: transform 200ms ease-out;
        transform: scaleX(1);
      }

      :host([horizontal]) a.selected ~ hr,
      :host([horizontal]) a:focus ~ hr {
        transform: scaleX(1);
      }

      :host([vertical]) a {
        display: block;
        color: black;
        font-family: var(--fontFamily);
        font-size: 16px;
        text-decoration: none;
        padding: 8px 16px;
        transition: background-color 200ms, color 200ms;
      }

      :host([vertical]) a:hover,
      :host([vertical]) a:focus, 
      :host([vertical]) a.selected {
        background-color: lightGray !important;
        color: var(--themeColor);
      }

      :host([vertical])  hr {
        display: none;
      }
    </style>
    <a href="#" class="text"></a>
    <hr>
    `;
        this._aElement = this._root.querySelector('a');
        this._textElement = this._root.querySelector('.text');
        this.text = text || '';
        if (href) this._aElement.href = href;
    }
    get text() {
        return this._aElement.textContent;
    }
    set text(text) {
        this._aElement.textContent = text;
    }
    /* Styles nav link as selected. */ select() {
        this._aElement.classList.add('selected');
    }
    /* Styles nav link as unselected. */ deselect() {
        this._aElement.classList.remove('selected');
    }
}
const $6f2c1ab3e7192777$var$componentTag = `${$e5f9c53905dfbbf9$export$a5a6e0b888b2c992.prefix}-navlink`;
customElements.get($6f2c1ab3e7192777$var$componentTag) || customElements.define($6f2c1ab3e7192777$var$componentTag, $6f2c1ab3e7192777$export$8de7bebd782d31ee);


$parcel$exportWildcard(module.exports, $1d5f27f301ff7206$exports);
$parcel$exportWildcard(module.exports, $69d79346054b6627$exports);
$parcel$exportWildcard(module.exports, $476c73442f2e4270$exports);
$parcel$exportWildcard(module.exports, $6f2c1ab3e7192777$exports);


//# sourceMappingURL=main.js.map
