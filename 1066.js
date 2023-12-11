const path = require('path');
const currentFile = path.dirname(process.argv[1]);

//realiza a leitura das linhas no arquivo dev\stdin
var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8');
var lines = input.split('\r\n');


const numerosPares = []
const numerosImpares = []
const numerosPositivos = []
const numerosNegativos = []

for (let index = 0; index < 5; index++) {
    
    let calculoParOuImpar = (lines[index] % 2);

    

    if (calculoParOuImpar === 0) {
        numerosPares.push(lines[index])
    }

    if (calculoParOuImpar != 0) {
        numerosImpares.push(lines[index])
    }

    if (lines[index] > 0) {
        numerosPositivos.push(lines[index])
    }

    if (lines[index] < 0) {
        numerosNegativos.push(lines[index])
    }
}



console.log(`${numerosPares.length} valor(es) par(es)`)
console.log(`${numerosImpares.length} valor(es) impar(es)`)
console.log(`${numerosPositivos.length} valor(es) positivo(s)`)
console.log(`${numerosNegativos.length} valor(es) negativo(s)`)

/* switch (key) {
    case value:
        
        break;

    default:
        break;
} */


