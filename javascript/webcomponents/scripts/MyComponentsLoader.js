class MyComponentsLoader extends WebComponentsLoader {
    get PathRoot() {
        return 'components/';
    }
    get Components() {
        return {
            LazyImage: 'LazyImage.js',
            Wysiwyg: 'Wysiwyg.js'
        }
    }
}