const path = require('path');
const currentFile = path.dirname(process.argv[1]);

//realiza a leitura das linhas no arquivo dev\stdin
var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8');
var lines = input.split('\r\n');

/////////////////////// COLAR NO BEECROWD O CODIGO DESTE PONTO EM DIANTE ///////////////////


//obtem o primeiro valor do arquivo stdin
let tempoInicial = parseFloat(lines[0]); // em segundos

let horas, minutos, segundos

horas = Math.trunc(tempoInicial / 3600)

let parteDecimalHoras = ((tempoInicial / 3600) % 1)

minutos = Math.trunc(parteDecimalHoras * 60)

// 38:55:53
parteDecimalMinutos = (parteDecimalHoras * 60) % 1

segundos = Math.round(parteDecimalMinutos * 60)

console.log(`${horas}:${minutos}:${segundos}`)

// horas:minutos:segundos
