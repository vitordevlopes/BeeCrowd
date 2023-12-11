//importo o modulo fs (filesystem) para trabalhar com arquivos e diretorios
const fileSystem = require('fs')

//importo o modulo path para trabalhar com o endereço de arquivos e diretorios
const endereco = require('path');

//descubro o endereço de onde meu script js esta salvo
//ex: c:\documentos\javascript
const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);

//realiza a leitura das linhas no arquivo dev\stdin que foi criado
const conteudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '\\dev\\stdin', 'utf8');

//define qual é a quebra de linha utilizada no seu sistema operacional
//se você estiver utilizando linux coloque \n se for windows coloque \r\n
const quebraLinhaWindows = '\r\n'

let lines = conteudoArquivo.split(quebraLinhaWindows);

///////////////////////COLAR NO BEECROWD O CODIGO DESTE PONTO EM DIANTE///////////////////
//para ler linhas com mais de um valor na mesma linha use o comando a seguir

main()

function main() {

    let [x1, y1] = lines.shift().split(" ");
    let [x2, y2] = lines.shift().split(" ");

    x1 = parseFloat(x1)
    x2 = parseFloat(x2)
    y1 = parseFloat(y1)
    y2 = parseFloat(y2)

   let distanciaTotal =  MedirDistanciaDoisPontos(x1, x2, y1, y2)

   distanciaTotal = distanciaTotal.toFixed(4)

   console.log(distanciaTotal)
}



function MedirDistanciaDoisPontos(x1, x2, y1, y2) {

  return  Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2))
}




