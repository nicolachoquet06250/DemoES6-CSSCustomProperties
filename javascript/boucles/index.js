/*
 * We can have many loop type
 */

// classic for
for(let i = 0; i<5; i++) console.log(i);
for(let i = 5; i>0; i--) console.log(i);

// for in: get keys in objects or arrays
const myObject = {
    prop1: 1,
    prop2: 'coucou',
    prop3: [
        'hello'
    ]
};
for(let prop in myObject) {
    console.log(prop);
    console.log(myObject[prop]);
}

// for of: get values in objects or arrays
for (let value of myObject) {
    console.log(value);
}

// while
let i = 0;
while (i < 5) {
    i++;
    console.log(i);
}

i = 0;
while (true) {
    if(i < 5) {
        i++;
        console.log(i);
        continue;
    }
    break;
}

// do while
i = 0;
do {
    i++;
    console.log(i);
} while (i < 10);

// labels

// toto is a label
let str = '';
toto:
    for (let i = 0; i < 5; i++) {
        if (i === 1) {
            continue toto;
        }
        str = str + i;
    }