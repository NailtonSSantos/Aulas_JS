//Callback >
//Promise >
//async/await

const fs = require('fs');

console.log(1);

/*function callback(err, contents){
    console.log(err, String(contents))
}

fs.readFile('./in1.txt', callback)*/

//SE EU FOR USAR A FUNÇÃO APENAS 1 VEZ, FICA ASSIM:
/*
fs.readFile('./in1.txt', (err, contents) => {
    console.log(err, String(contents))
})*/

//PROMISE
const readFile = file => new Promise((resolve, reject) => {
    fs.readFile(file, (err, contents) => {
        if(err){
            reject(err);
        }else{
            resolve(contents);
        }
    })
})
/*
//PROMISE
readFile('./in1.txt')
.then(contents => {
        console.log(String(contents));
        return readFile('./in2.txt');
})
.then(contents => {
    console.log(String(contents));
})
*/

const init = async() => {
    try{
        const contents = await readFile('./in1.txt');
        const contents2 = await readFile('./in2.txt');
        return String(contents) + '\n' + String(contents2)
    }catch{
        console.log(err)
    }
}
init()
.then(contents => console.log(contents))


console.log(2);

console.log(3);