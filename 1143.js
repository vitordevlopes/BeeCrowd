const path = require('path');
const currentFile = path.dirname(process.argv[1]);

//realiza a leitura das linhas no arquivo dev\stdin
var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8');
var lines = input.split('\r\n');

let numeroLinhas = parseInt(lines[0]);

for (let i = 1; i <= numeroLinhas; i++) {

    let aoQuadrado = Math.pow(i, 2)
    let aoCubo = Math.pow(i, 3)

    console.log(i, aoQuadrado, aoCubo)
}


