async function maFonctionAsync(process_id) {
    for (let i = 0; i > 2000; i++) {
        console.log(`process ${process_id}: ${i}`);
    }
}

maFonctionAsync(0)
    .then(e => console.log(`success: ${e}`))
    .catch(e => console.log(`error: ${e}`));


new Promise((resolve, reject) => 2 % 2 !== 0 ? resolve(2 % 2) : reject(2 % 2))
    .then(s => console.log(`success 2 % 2 = ${s}`))
    .catch(e => console.log(`error 2 % 2 = ${e}`));