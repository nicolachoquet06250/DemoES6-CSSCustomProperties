class WebComponentList {

    constructor() {
        this.list = {};
    }

    add(tag, webComponent) {
        if(typeof webComponent === 'function') {
            this.list[tag] = webComponent;
            const register = () => customElements.define(tag, webComponent);
            window.WebComponents ? window.WebComponents.waitFor(register) : register();
        }
    }

    get() {
        return this.list;
    }

    delete(tag) {
        if(this.list[tag] !== undefined) {
            delete this.list[tag];
        }
    }
}