
const path = require('path');
const currentFile = path.dirname(process.argv[1]);

//realiza a leitura das linhas no arquivo dev\stdin
var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8');
var lines = input.split('\r\n');

/////////////////////// COLAR NO BEECROWD O CODIGO DESTE PONTO EM DIANTE ///////////////////

main()

function main() {

    
//obtem o primeiro valor do arquivo stdin
let distanciaTotal = parseInt(lines[0]);
//obtem o segundo valor do arquivo stdin
let combustivelTotal = parseFloat(lines[1]);

calcularConsumoMedio(distanciaTotal, combustivelTotal)

}

function calcularConsumoMedio(distanciaTotal, combustivelTotal) {

 let consumoMedio

    consumoMedio = (distanciaTotal / combustivelTotal);

    console.log(`${consumoMedio.toFixed(3)} km/l`)
}
















// Calcule o consumo médio de um automóvel sendo fornecidos a distância total percorrida (em Km) e o total de combustível gasto (em litros).

// Entrada
// O arquivo de entrada contém dois valores: um valor inteiro X representando a distância total percorrida (em Km), e um valor real Y representando o total de combustível gasto, com um dígito após o ponto decimal.