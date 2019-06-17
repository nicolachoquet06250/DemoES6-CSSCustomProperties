class Operation {
    constructor(a, b) {
        this.a = a;
        this.b = b;
    }

    get addition() {
        return this.add();
    }
    get multiplication() {
        return this.multiply();
    }
    get substraction() {
        return this.substract();
    }
    get moduloRestult() {
        return this.modulo();
    }
    get division() {
        return this.divide();
    }

    add() {
        return this.a + this.b;
    }
    multiply() {
        return this.a * this.b;
    }
    modulo() {
        return this.a % this.b;
    }
    substract() {
        return this.a - this.b;
    }
    divide() {
        return this.a / this.b;
    }
}
console.log('classes');
let operation = new Operation(2, 10);

console.log('with methods');
console.log(`addition: ${operation.add()}`);
console.log(`multiplication: ${operation.multiply()}`);
console.log(`substraction: ${operation.substract()}`);
console.log(`division: ${operation.divide()}`);
console.log(`modulo: ${operation.modulo()}`);

console.log('with readonly variables');
console.log(`addition: ${operation.addition}`);
console.log(`multiplication: ${operation.multiplication}`);
console.log(`substraction: ${operation.substraction}`);
console.log(`division: ${operation.division}`);
console.log(`modulo: ${operation.moduloRestult}`);

// -------------------------------------------------------------------------------------------

const Operation2 = {
    constructor(a, b) {
        this.a = a;
        this.b = b;
    },

    get addition() {
        return this.add();
    },
    get multiplication() {
        return this.multiply();
    },
    get substraction() {
        return this.substract();
    },
    get moduloRestult() {
        return this.modulo();
    },
    get division() {
        return this.divide();
    },

    add: () => this.a + this.b,
    multiply: () => this.a * this.b,
    modulo: () => this.a % this.b,
    substract: () => this.a - this.b,
    divide: () => this.a / this.b
};
console.log('js objects');
let operation2 = Operation2.constructor(2, 10);

console.log('with methods');
console.log(`addition: ${operation2.add()}`);
console.log(`multiplication: ${operation2.multiply()}`);
console.log(`substraction: ${operation2.substract()}`);
console.log(`division: ${operation2.divide()}`);
console.log(`modulo: ${operation2.modulo()}`);

console.log('with readonly variables');
console.log(`addition: ${operation2.addition}`);
console.log(`multiplication: ${operation2.multiplication}`);
console.log(`substraction: ${operation2.substraction}`);
console.log(`division: ${operation2.division}`);
console.log(`modulo: ${operation2.moduloRestult}`);

// -------------------------------------------------------------------------------------------

let Operation3 = function (a, b) {
    this.a = a;
    this.b = b;
};

Operation3.prototype.add = () => this.a + this.b;
Operation3.prototype.multiply = () => this.a * this.b;
Operation3.prototype.substract = () => this.a - this.b;
Operation3.prototype.divide = () => this.a / this.b;
Operation3.prototype.modulo = () => this.a % this.b;

Object.defineProperty(Operation3, 'addition', { get: () => this.add() });
Object.defineProperty(Operation3, 'multiplication', { get: () => this.multiply() });
Object.defineProperty(Operation3, 'substraction', { get: () => this.substract() });
Object.defineProperty(Operation3, 'division', { get: () => this.divide() });
Object.defineProperty(Operation3, 'moduloResult', { get: () => this.modulo() });
console.log('prototypes');
let operation3 = new Operation3(2, 10);

console.log('with methods');
console.log(`addition: ${operation3.add()}`);
console.log(`multiplication: ${operation3.multiply()}`);
console.log(`substraction: ${operation3.substract()}`);
console.log(`division: ${operation3.divide()}`);
console.log(`modulo: ${operation3.modulo()}`);

console.log('with readonly variables');
console.log(`addition: ${operation3.addition}`);
console.log(`multiplication: ${operation3.multiplication}`);
console.log(`substraction: ${operation3.substraction}`);
console.log(`division: ${operation3.division}`);
console.log(`modulo: ${operation3.moduloRestult}`);

