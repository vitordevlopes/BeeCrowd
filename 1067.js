const path = require('path');
const currentFile = path.dirname(process.argv[1]);

//realiza a leitura das linhas no arquivo dev\stdin
var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8');
var lines = input.split('\r\n');


// mostrar os valores impares de 1 até X, e X também se for o caso.

let x = parseInt(lines[0]);

// pra ser impar o resto da divisão tem que ser diferente de 0

for (let i = 1; i <= x; i++) {

   let calculoNumeroImpar = i % 2;

   if (calculoNumeroImpar != 0 ) {

    let numeroPar = i

    console.log(i)
   }
}