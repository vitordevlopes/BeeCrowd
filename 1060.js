const path = require('path');
const currentFile = path.dirname(process.argv[1]);

//realiza a leitura das linhas no arquivo dev\stdin
var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8');
var lines = input.split('\r\n').map(parseFloat);


let numerosPositivos = []

for (i = 0; i < lines.length; i++) {

    if (lines[i] > 0) {
        numerosPositivos.push(lines[i])
    }
}

console.log(`${numerosPositivos.length} valores positivos`)



