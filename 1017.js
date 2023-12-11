const path = require('path');
const currentFile = path.dirname(process.argv[1]);

//realiza a leitura das linhas no arquivo dev\stdin
var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8');
var lines = input.split('\r\n');

/////////////////////// COLAR NO BEECROWD O CODIGO DESTE PONTO EM DIANTE ///////////////////

main()

function main () {
    
    //obtem o primeiro valor do arquivo stdin
    let tempo = parseInt(lines[0]);
    //obtem o segundo valor do arquivo stdin
    let velocidadeMedia = parseInt(lines[1]);

    let distancia = tempo * velocidadeMedia;

    let qtdeLitrosNecessario = calcularQtdeLitros(distancia)

    console.log(`${qtdeLitrosNecessario.toFixed(3)}`)
    
}

function calcularQtdeLitros(distancia) {
         
    // o carro faz 12km/l
    const KMPORLITRO = 12

   return distancia / KMPORLITRO
}





