const path = require('path');
const currentFile = path.dirname(process.argv[1]);

//realiza a leitura das linhas no arquivo dev\stdin
var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8');
var lines = input.split('\r\n');

/////////////////////// COLAR NO BEECROWD O CODIGO DESTE PONTO EM DIANTE ///////////////////

//quebrando a entrada de dados de uma linha em variaveis separadas
//quando os valores estiverem na mesma linha
//lines = lines[0].split(" ");

//obtem o primeiro valor do arquivo stdin
let A = parseFloat(lines[0]);
//obtem o segundo valor do arquivo stdin
let B = parseFloat(lines[1]);

let C = parseFloat(lines[2])

let calculoMediaPonderada = ((A * 2) + (B * 3) + (C * 5)) / 10

console.log(`MEDIA = ${calculoMediaPonderada.toFixed(1)}`)
