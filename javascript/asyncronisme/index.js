// With async / Await
let fs = require('fs');
let https = require('https');
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

// With Promises
let promise2 = new Promise(resolve => {
    resolve({ operation: `2 + 65 = `, result: 2 + 65 });
});

promise2.then(console.log);

// then method is executed when all elements are loaded
Promise.all([
    new Promise((resolve, reject) => {
        setTimeout(() => resolve("I wait 8s"), 8000);
    }),
    new Promise((resolve, reject) => {
        setTimeout(() => resolve("I wait 4s"), 4000);
    })
]).then(console.log)
    .catch(console.error);

// concrete example
// two requests done in a same time and return result of two requests in one array
Promise.all([
    new Promise((resolve, reject) => {
        let complete_data = '';
        https.get('https://holidayapi.com/v1/holidays?key=11118eca-28a0-4a03-88cf-327754ee5cc8&country=FR&year=2018', r => {
            r.on('data',d => {
                complete_data += d.toString();
                if(complete_data.substr(complete_data.length - 2, 2) === ']}') resolve(JSON.parse(complete_data));
            })
        }).on('error', reject);
    }),
    new Promise((resolve, reject) => {
        let complete_data = '';
        https.get('https://api.coindesk.com/v1/bpi/currentprice/EUR.json', r => {
            r.on('data',d => {
                complete_data += d.toString();
                if(complete_data.substr(complete_data.length - 2, 2) === '}}') resolve(JSON.parse(d.toString()));
            })
        }).on('error', reject);
    })
]).then(r => console.log('all ', r)).catch(console.error);

// then method is executed when the first element is loaded
Promise.race([
    new Promise((resolve, reject) => {
        setTimeout(() => resolve(new Map([["text", "I wait 8s"], ["v", "one"]])), 8000);
    }),
    new Promise((resolve, reject) => {
        setTimeout(() => resolve(new Map([["text", "I wait 4s"], ["v", "two"]])), 4000);
    })
]).then(set => console.log(set.get('text'), set.get('v')))
    .catch(console.error);

// concrete example
Promise.race([
    new Promise((resolve, reject) => {
        let complete_data = '';
        https.get('https://holidayapi.com/v1/holidays?key=11118eca-28a0-4a03-88cf-327754ee5cc8&country=FR&year=2018', r => {
            r.on('data',d => {
                complete_data += d.toString();
                if(complete_data.substr(complete_data.length - 2, 2) === ']}') resolve(JSON.parse(complete_data));
            })
        }).on('error', reject);
    }),
    new Promise((resolve, reject) => {
        let complete_data = '';
        https.get('https://api.coindesk.com/v1/bpi/currentprice/EUR.json', r => {
            r.on('data',d => {
                complete_data += d.toString();
                if(complete_data.substr(complete_data.length - 2, 2) === '}}') resolve(JSON.parse(d.toString()));
            })
        }).on('error', reject);
    })
]).then(r => console.log('race ', r)).catch(console.error);