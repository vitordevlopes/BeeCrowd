const path = require('path');
const currentFile = path.dirname(process.argv[1]);

//realiza a leitura das linhas no arquivo dev\stdin
var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8');
var lines = input.split('\r\n');

let pessoasTerceiroLink = parseInt(lines[0]);

let pessoasSegundoLink = (2 * pessoasTerceiroLink)

let pessoasPrimeiroLink = (pessoasSegundoLink * 2)

console.log(pessoasPrimeiroLink)


