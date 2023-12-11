const path = require('path');
const currentFile = path.dirname(process.argv[1]);

//realiza a leitura das linhas no arquivo dev\stdin
var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8');
var lines = input.split('\r\n');

/////////////////////// COLAR NO BEECROWD O CODIGO DESTE PONTO EM DIANTE ///////////////////

//quebrando a entrada de dados de uma linha em variaveis separadas
//quando os valores estiverem na mesma linha
//lines = lines[0].split(" ");

//obtem o primeiro valor do arquivo stdin
let nomeVendedor = (lines[0]);
//obtem o segundo valor do arquivo stdin
let salarioFixo = parseFloat(lines[1]);

let totalVendas = parseFloat(lines[2]);

let VendaFinalMes

VendaFinalMes = (salarioFixo + (0.15 * totalVendas)).toFixed(2)

console.log(`TOTAL = R$ ${VendaFinalMes}`);


// VendaFinalMes =  salarioFixo + 15/% de totalVendas





// Faça um programa que leia o nome de um vendedor, o seu salário fixo e o total de vendas efetuadas por ele no mês (em dinheiro). Sabendo que este vendedor ganha 15% de comissão sobre suas vendas efetuadas, informar o total a receber no final do mês, com duas casas decimais.