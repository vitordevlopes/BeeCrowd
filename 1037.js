const path = require('path');
const currentFile = path.dirname(process.argv[1]);

//realiza a leitura das linhas no arquivo dev\stdin
var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8');
var lines = input.split('\r\n');


let valor = parseFloat(lines[0]);

// ([0,25], (25,50], (50,75], (75,100])

if (valor >= 0 && valor <= 25 ) {

    console.log(`Intervalo [0,25]`)

} else if (valor > 25 && valor <= 50) {

    console.log(`Intervalo (25,50]`)

} else if (valor > 50 && valor <= 75) {

    console.log(`Intervalo (50,75]`)

} else if (valor > 75 && valor <=100) {

    console.log(`Intervalo (75,100]`)
} else {

    console.log(`Fora de intervalo`)
}