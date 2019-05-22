class WebComponentsLoader {
    get LibPath() { return 'WebComponentsJs/' }
    get LibClasses() {
        return {
            WebComponentList: 'WebComponentList.js',
            WebComponent    : 'WebComponent.js'
        }
    }

    get PathRoot() { return null; }
    get Components() { return {}; }

    LoadLib() {
        for(let _class in this.LibClasses) {
            let script = document.createElement('script');
            script.src = (this.LibPath !== null ? this.LibPath : '' ) + this.LibClasses[_class];
            document.querySelector('body').append(script);
        }
        console.log('all lib has been loaded !');
    }

    LoadMyComponents() {
        for(let component in this.Components) {
            let script = document.createElement('script');
            script.src = (this.PathRoot !== null ? this.PathRoot : '' ) + this.Components[component];
            document.querySelector('body').append(script);
            console.log(`${component} component is been loaded !`);
        }
    }

    LoadAll() {
        this.LoadLib();
        this.LoadMyComponents();
    }
}