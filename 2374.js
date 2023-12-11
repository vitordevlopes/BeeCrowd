const path = require('path');
const currentFile = path.dirname(process.argv[1]);

//realiza a leitura das linhas no arquivo dev\stdin
var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8');
var lines = input.split('\r\n');


let pressaoDesejada = parseFloat(lines[0]);
let pressaoAtualPneu = parseFloat(lines[1]);

let diferencaPressao = (pressaoDesejada - pressaoAtualPneu)

console.log(diferencaPressao)

