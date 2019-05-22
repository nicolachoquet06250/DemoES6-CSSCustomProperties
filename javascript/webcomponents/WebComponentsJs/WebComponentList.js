const register = (tag, webComponent) => {
    customElements.define(tag, webComponent);
};

class WebComponentList {

    constructor() {
        this.list = {};
    }

    add(tag, webComponent) {
        if(typeof webComponent === 'function') {
            this.list[tag] = webComponent;
            register(tag, webComponent);
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