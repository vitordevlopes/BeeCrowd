const path = require('path');
const currentFile = path.dirname(process.argv[1]);

//realiza a leitura das linhas no arquivo dev\stdin
var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8');
var lines = input.split('\r\n');

let valor = parseFloat(lines[0]);


console.log("NOTAS:")

let notas = parseInt(valor / 100)
console.log(`${notas} nota(s) de R$ 100.00`)
valor = valor % 100

 notas = parseInt(valor / 50)
console.log(`${notas} nota(s) de R$ 50.00`)
valor = valor % 50

 notas = parseInt(valor / 20)
console.log(`${notas} nota(s) de R$ 20.00`)
valor = valor % 20

 notas = parseInt(valor / 10)
console.log(`${notas} nota(s) de R$ 10.00`)
valor = valor % 10

 notas = parseInt(valor / 5)
console.log(`${notas} nota(s) de R$ 5.00`)
valor = valor % 5

 notas = parseInt(valor / 2)
console.log(`${notas} nota(s) de R$ 2.00`)
valor = valor % 2

console.log("MOEDAS:")

// moedas: 1, 0.50, 0.25, 0.10, 0.05 e 0.01

notas = parseFloat(valor / 1)
console.log(`${Math.floor(notas)} moeda(s) de R$ 1.00`)
valor = valor % 1

notas = parseFloat(valor / 0.50)
console.log(`${Math.floor(notas)} moeda(s) de R$ 0.50`)
valor = valor % 0.50

notas = parseFloat(valor / 0.25)
console.log(`${Math.floor(notas)} moeda(s) de R$ 0.25`)
valor = valor % 0.25

notas = parseFloat(valor / 0.10)
console.log(`${Math.floor(notas)} moeda(s) de R$ 0.10`)
valor = valor % 0.10

notas = parseFloat(valor / 0.05)
console.log(`${Math.floor(notas)} moeda(s) de R$ 0.05`)
valor = valor % 0.05

notas = parseFloat(valor / 0.01)
console.log(`${notas.toFixed(0)} moeda(s) de R$ 0.01`)
