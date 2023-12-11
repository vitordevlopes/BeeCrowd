const path = require('path');
const currentFile = path.dirname(process.argv[1]);

//realiza a leitura das linhas no arquivo dev\stdin
var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8');
var lines = input.split('\r\n');


let valor = parseInt(lines[0]);

for (let i = 0; i <= valor; i++) {
    
    calculoDivisor = valor % i

    if (calculoDivisor === 0) {
        
        console.log(i)
    }
}


