const path = require('path');
const currentFile = path.dirname(process.argv[1]);

//realiza a leitura das linhas no arquivo dev\stdin
var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8');
var lines = input.split('\r\n');

/////////////////////// COLAR NO BEECROWD O CODIGO DESTE PONTO EM DIANTE ///////////////////

main()

function main() {

    //obtem o primeiro valor do arquivo stdin
let valor = parseInt(lines[0]);

const nota100 = 100
const nota50 = 50
const nota20 = 20
const nota10 = 10
const nota5 = 5
const nota2 = 2
const nota1 = 1

console.log(valor)

menorNumeroNotas(valor, nota100, nota50, nota20, nota10, nota5, nota2, nota1)
}

function menorNumeroNotas(valor, nota100, nota50, nota20, nota10, nota5, nota2, nota1) {
// 5 nota(s) de R$ 100,00

    let divisao100 = Math.trunc(valor / nota100)

    console.log(`${divisao100} nota(s) de R$ ${nota100},00`)

    let resto100 = valor % nota100

    let divisao50 = Math.trunc(resto100 / nota50)

    console.log(`${divisao50} nota(s) de R$ ${nota50},00`)

   let resto50 = resto100 % nota50 // 26

    let divisao20 = Math.trunc(resto50 / nota20) // 1

    console.log(`${divisao20} nota(s) de R$ ${nota20},00`)

    let resto20 = resto50 % nota20 // 6

    let divisao10 = Math.trunc(resto20 / nota10)

    console.log(`${divisao10} nota(s) de R$ ${nota10},00`)
    
    let resto10 = resto20 % nota10 // 6

    let divisao5 = Math.trunc(resto10 / nota5)

    console.log(`${divisao5} nota(s) de R$ ${nota5},00`)

    let resto5 = resto10 % nota5

    let divisao2 = Math.trunc(resto5 / nota2)

    console.log(`${divisao2} nota(s) de R$ ${nota2},00`)

    let resto2 = resto5 % nota2

    let divisao1 = Math.trunc(resto2 / nota1)

    console.log(`${divisao1} nota(s) de R$ ${nota1},00`)
}
