const path = require('path');
const currentFile = path.dirname(process.argv[1]);

//realiza a leitura das linhas no arquivo dev\stdin
var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8');
var lines = input.split('\r\n').map(parseFloat);


const VALORESPARES = []

for (let i = 0; i < lines.length; i++) {

    let indicePor2 = (lines[i] % 2)

    if (indicePor2 === 0) {

    VALORESPARES.push(lines[i])
    }
}

console.log(`${VALORESPARES.length} valores pares`)


/* var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n').map(parseFloat);

const VALORESPARES = lines.filter(num => num % 2 === 0);

console.log(`${VALORESPARES.length} valores pares`); */
// O codigo acima é uma versao que usa o filter e fica mais simples