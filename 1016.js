const path = require('path');
const currentFile = path.dirname(process.argv[1]);

//realiza a leitura das linhas no arquivo dev\stdin
var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8');
var lines = input.split('\r\n');

/////////////////////// COLAR NO BEECROWD O CODIGO DESTE PONTO EM DIANTE ///////////////////
main()
//obtem o primeiro valor do arquivo stdin
function main() {

    let distancia = parseInt(lines[0]);

    let tempo = calcularTempo(distancia)

    console.log(`${tempo} minutos`)
}

function calcularTempo(distancia) {

  return distancia * 2

   
}


