WebComponent.List.add(
    'wysi-wyg',
    class extends WebComponent {
        static get observedAttributes() {
            return [];
        }

        get Template() {
            return `<div class="wysiwyg" contenteditable="true"></div>`;
        }
        get Style() {
            return `
        :host {
            width: 150px;
            height: 150px;
            position: absolute;
            top: 250px;
        }
        
        :host .wysiwyg {
            width: 100%;
            height: 100%;
            color: white;
            background: purple;
        }`;
        }
        get useShadow() {
            return true;
        }

        onConnect() {
            console.log(this.querySelector('.wysiwyg'));
        }
    }
);