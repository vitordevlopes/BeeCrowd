const path = require('path');
const currentFile = path.dirname(process.argv[1]);

var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8');
var lines = input.split('\r\n').map(parseFloat);

const numerosPositivos = []

for (let index = 0; index < lines.length; index++) {
    
    if (lines[index] > 0) {
        numerosPositivos.push(lines[index])
    }
    
}

console.log(`${numerosPositivos.length} valores positivos`)

let soma = numerosPositivos.reduce((total, valorAtual) => (total + valorAtual), 0);
let media = soma / numerosPositivos.length

console.log(media.toFixed(1))


