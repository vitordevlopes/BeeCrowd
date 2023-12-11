const path = require('path');
const currentFile = path.dirname(process.argv[1]);

//realiza a leitura das linhas no arquivo dev\stdin
var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8');
var lines = input.split('\r\n').map(parseFloat);


const numerosPositivos = lines.filter(line => line > 0);

console.log(`${numerosPositivos.length} valores positivos`);

// gerado na ia do bing



