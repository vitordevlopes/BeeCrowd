const path = require('path');
const currentFile = path.dirname(process.argv[1]);

//realiza a leitura das linhas no arquivo dev\stdin
var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8');
var lines = input.split('\r\n');

let x = parseInt(lines[0]);

const NUMEROSIMPARES = []

for (let i = x; i >= x; i++) {
    
    if (NUMEROSIMPARES.length === 6) {
        return
    }

   let calculoNumeroImpar = i % 2;

   if (calculoNumeroImpar != 0 ) {

    let numeroImpar = i

    NUMEROSIMPARES.push(i)

    console.log(i)
   }
}
