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
let numeroFuncionario = parseFloat(lines[0]);
//obtem o segundo valor do arquivo stdin
let horasTrabalhadas = parseFloat(lines[1]);

let salarioPorHora = parseFloat(lines[2]);



console.log(`NUMBER = ${numeroFuncionario}`);

let salarioTotalFuncionario = horasTrabalhadas * salarioPorHora;

console.log(`SALARY = U$ ${salarioTotalFuncionario.toFixed(2)}`);








//Escreva um programa que leia o número de um funcionário, seu número de horas trabalhadas, o valor que recebe por hora e calcula o salário desse funcionário. A seguir, mostre o número e o salário do funcionário, com duas casas decimais.