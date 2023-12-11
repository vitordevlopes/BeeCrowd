const path = require('path');
const currentFile = path.dirname(process.argv[1]);

//realiza a leitura das linhas no arquivo dev\stdin
var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8');
var lines = input.split('\r\n');


let valor = parseInt(lines[0]);

let arraySubtraidos = []

for (let i = 1; i < valor; i++) {

    subtracao = valor - i

    arraySubtraidos.push(subtracao)
}

let fatorial = valor

for (let i = 0; i < arraySubtraidos.length; i++) {
     
     fatorial = fatorial * arraySubtraidos[i]
}

console.log(fatorial)

