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
let [codigoPeca1, qtdePeca1, valorPeca1] = lines.shift().split(" "); 
let [codigoPeca2, qtdePeca2, valorPeca2] = lines.shift().split(" "); 

codigoPeca1 = parseInt(codigoPeca1)
codigoPeca2 = parseInt(codigoPeca2)
qtdePeca1 = parseInt(qtdePeca1)
qtdePeca2 = parseInt(qtdePeca2)
valorPeca1 = parseFloat(valorPeca1)
valorPeca2 = parseFloat(valorPeca2)

let preçoTotal = (valorPeca1 * qtdePeca1) + (valorPeca2 * qtdePeca2)

console.log(`VALOR A PAGAR: R$ ${preçoTotal.toFixed(2)}`)
