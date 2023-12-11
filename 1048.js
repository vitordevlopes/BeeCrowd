const path = require('path');
const currentFile = path.dirname(process.argv[1]);

//realiza a leitura das linhas no arquivo dev\stdin
var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8');
var lines = input.split('\r\n');


let salario = parseFloat(lines[0]);

let valorReajuste = 0
let novoSalario = 0


if (salario <= 400) {

    valorReajuste = salario * 0.15
    novoSalario = salario + valorReajuste

    console.log(`Novo salario: ${novoSalario.toFixed(2)}`)
    console.log(`Reajuste ganho: ${valorReajuste.toFixed(2)}`)
    console.log(`Em percentual: 15 %`)

    return
}

if (salario >= 400.01 && salario <= 800) {

    valorReajuste = salario * 0.12
    novoSalario = salario + valorReajuste

    console.log(`Novo salario: ${novoSalario.toFixed(2)}`)
    console.log(`Reajuste ganho: ${valorReajuste.toFixed(2)}`)
    console.log(`Em percentual: 12 %`)

    return
}

if (salario >= 800.01 && salario <= 1200) {

    valorReajuste = salario * 0.1;
    novoSalario = salario + valorReajuste;

    console.log(`Novo salario: ${novoSalario.toFixed(2)}`)
    console.log(`Reajuste ganho: ${valorReajuste.toFixed(2)}`)
    console.log(`Em percentual: 10 %`)

    return
}

if (salario >= 1200.01 && salario <= 2000) {

    valorReajuste = salario * 0.07;
    novoSalario = salario + valorReajuste;

    console.log(`Novo salario: ${novoSalario.toFixed(2)}`)
    console.log(`Reajuste ganho: ${valorReajuste.toFixed(2)}`)
    console.log(`Em percentual: 7 %`)

    return
}

if (salario >= 2000) {

    valorReajuste = salario * 0.04;
    novoSalario = salario + valorReajuste;

    console.log(`Novo salario: ${novoSalario.toFixed(2)}`)
    console.log(`Reajuste ganho: ${valorReajuste.toFixed(2)}`)
    console.log(`Em percentual: 4 %`)

    return
}
