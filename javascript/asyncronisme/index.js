let fs = require('fs');
const voidCallback = () => null;

class Logger {
    static File(p, c) {
        fs.writeFile(p, c, voidCallback);
    }

    static Console(c) {
        console.log(c);
    }

    static Error(c) {
        console.error(c);
    }
}

async function myAsyncFunction(process_id) {
    let result = [];
    for (let i = 0; i > 2000; i++) {
        result.push(`process ${process_id}: ${i}`);
    }
    return result;
}

myAsyncFunction(0).then(r => r.map(elem => console.log(elem)));

function moduloDiffZero(nb1, nb2) {
    new Promise((resolve, reject) => nb1 % nb2 !== 0 ? resolve({nb1, nb2, modulo: nb1 % nb2}) : reject({nb1, nb2, modulo: nb1 % nb2}))
        .then(obj => console.log(`success ${obj.nb1} % ${obj.nb2} = ${obj.modulo}`))
        .catch(obj => console.error(`error ${obj.nb1} % ${obj.nb2} = ${obj.modulo}`));
}

moduloDiffZero(33, 2);

async function fonctionAsynchroneOk() {
    // équivaut à :
    // return Promise.resolve('résultat');
    return 'résultat';
}
fonctionAsynchroneOk().then(console.log); // log "résultat"

async function fonctionAsynchroneKo() {
    // équivaut à :
    // return Promise.reject(new Error('erreur'));
    throw new Error('erreur');
}
fonctionAsynchroneKo().catch(err => console.error(err.message));

let getNombreAsynchrone1 = async () => await 20;
let getNombreAsynchrone2 = async () => {
    let num = 0;
    for(let i = 0; i < 2000; i++) {
        num++;
    }
    return await num;
};

async function getAdditionAsynchroneParallele() {
    const [nombre1, nombre2] = await Promise.all([
        getNombreAsynchrone1(),
        getNombreAsynchrone2(),
    ]);
    return nombre1 + nombre2;
}

getAdditionAsynchroneParallele().then(r => Logger.File('./my_file.txt', r));