WebComponent.List.add(
    'lazy-image',
    class extends WebComponent {
        static get observedAttributes() {
            return ['src', 'alt', 'onclick'];
        }

        get props() {
            return {
                src: {type: 'string', default: ''},
                alt: {type: 'string', default: ''},
                onclick: {type: 'function', default: e => {console.log('onclick par default')}}
            }
        }
        get Template() {
            return `<img id="image"/>`;
        }
        get Style() {
            return `
        :host {
          position: relative;
        }
    
        #image {
          position: absolute;
          top: 0;
          left: 0;
        }
    
        #image {
          opacity: 1;
        }`;
        }
        get useShadow() {
            return true;
        }

        setShadowImage() {
            this.shadowImage = this.useShadow ? this.shadowRoot.querySelector('#image') : this.querySelector('#image');
        }

        onElementClick(e) {
            console.log(e);
        }

        finishBuildElement() {
            this.setShadowImage();

            // Set the shadow img attributes.
            this.shadowImage.src = this.src = this.getAttribute('src');
            this.shadowImage.alt = this.alt = this.getAttribute('alt');
        }
        onLoad() {
            setTimeout(() => {
                this.setAttribute('src', 'https://www.paulla.asso.fr/images/stage/ubuntu-logo.gif/image');
            }, 5000);
        }

        onConnect() {
            this.finishBuildElement();
            this.onLoad();
        }
    }
);
