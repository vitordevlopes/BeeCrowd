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

let [codigoItem, quantidadeItem] = lines.shift().split(" ");

// codigos: 1, 2, 3, 4, 5

codigoItem = parseInt(codigoItem)
quantidadeItem = parseInt(quantidadeItem)

let cachorroQuente = (quantidadeItem * 4).toFixed(2)
let xSalada = (quantidadeItem * 4.50).toFixed(2)
let xBacon = (quantidadeItem * 5.00).toFixed(2)
let torradaSimples = (quantidadeItem * 2.00).toFixed(2)
let refrigerante = (quantidadeItem * 1.50).toFixed(2)

switch (codigoItem) {
    case 1:
        console.log(`Total: R$ ${cachorroQuente}`)
        break;

    case 2:

    console.log(`Total: R$ ${xSalada}`)
    break
    case 3:

    console.log(`Total: R$ ${xBacon}`)
    break
    case 4:

    console.log(`Total: R$ ${torradaSimples}`)
    break
    case 5:

    console.log(`Total: R$ ${refrigerante}`)
    break
    
}

