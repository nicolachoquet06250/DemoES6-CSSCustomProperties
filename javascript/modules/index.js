class MaClass {
    constructor() {
        console.log('je suis dans le constructeur de MaClass');
    }
}

function maFonction() {
    console.log('je suis dans ma fonction');
}

let maFonction2 = () => console.log('je suis dans ma fonction 2');

module.exports = {MaClass, maFonction, maFonction2};