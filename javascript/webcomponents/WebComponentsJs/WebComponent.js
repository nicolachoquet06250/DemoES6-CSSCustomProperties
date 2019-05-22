let WCList = null;
class WebComponent extends HTMLElement {
    constructor() {
        super();
        this.initGettersSetters();
    }

    static get List() {
        if(WCList === null) {
            WCList = new WebComponentList();
        }
        return WCList;
    }

    get props() {
        return {}
    }
    get _template() {
        let template = document.createElement('template');
        if(this.Template) template.innerHTML = (this.Style ? `<style>${this.Style}</style>` : '') + this.Template;
        if(this.Style) {
            window.ShadyCSS && window.ShadyCSS.prepareTemplate(template, tagName);
        }
        return template;
    }
    get useShadow() {
        return false;
    }

    attributeChangedCallback(name, oldVal, newVal) {
        this[name] = newVal;
    }
    safeSetAttribute(name, value) {
        if (this.getAttribute(name) !== value) this.setAttribute(name, value);
    }
    initGettersSetters() {
        for(let prop in this.props) {
            Object.defineProperty(this, prop, {
                get: () => this.getAttribute(prop),
                set: v => {
                    if(prop.substr(0, 2) === 'on') {
                        let callbackName = v;
                        if(callbackName.substr(0, 1) === '{') {
                            callbackName = callbackName.substr(1, callbackName.length - 2);
                        }
                        this.addEventListener(prop.substr(2, prop.length - 2), this[callbackName]);
                    }
                    else {
                        if (this.props[prop].type === typeof v) {
                            this.safeSetAttribute(prop, v);
                            if (this.shadowImage)
                                this.shadowImage[prop] = v;
                        }
                        else {
                            console.error(`type of ${prop} property must be ${this.props[prop].type}, actually this is ${typeof v}`);
                        }
                    }
                }
            });
            if(this.props[prop].default !== undefined && (this[prop] === undefined || this[prop] === null)) {
                this[prop] = this.props[prop].default;
            }
        }
    }

    initShadowRoot() {
        if (!this.shadowRoot) {
            this.attachShadow({mode: 'open'});
            this.appendTemplate(true);
        }
    }
    initClassicTemplate() {
        this.appendTemplate(false);
    }
    appendTemplate(InShadowDOM = false) {
        if(this._template) {
            InShadowDOM
                ? this.shadowRoot.append(this._template.content.cloneNode(true))
                : this.append(this._template.content.cloneNode(true));
        }
    }

    onConnect() {}
    onDisconnect() {}

    connectedCallback() {
        // Check if shadowRoot exists first
        this.useShadow ? this.initShadowRoot() : this.initClassicTemplate();
        this.onConnect();
    }
    disconnectCallback() {
        this.onDisconnect();
    }

}