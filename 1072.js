const path = require('path');
const currentFile = path.dirname(process.argv[1]);

//realiza a leitura das linhas no arquivo dev\stdin
var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8');
var lines = input.split('\r\n');



let qtdeTestes = parseInt(lines[0]);

lines.shift() // retirando o primeiro valor, deixando so os casos de teste

let linesInt = lines.map(function (item) {
    return parseInt(item, 10);
});


let nDentro = 0

let nFora = 0

// [10,20]

for (let i = 0; i < qtdeTestes; i++) {

    if (linesInt[i] >= 10 && linesInt[i] <= 20) {
        
        nDentro += 1

    } else {

        nFora += 1
    }
}

console.log(`${nDentro} in`)
console.log(`${nFora} out`)



