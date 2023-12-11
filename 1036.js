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
let [A, B, C, D] = lines.shift().split(" ");

let delta = Math.pow(B, 2) - 4 * A * C

if ((A > 0 || A < 0) && delta >= 0) {

    

let x1 = (-(B) + Math.sqrt(delta)) / (2 * A)
let x2 = (-(B) - Math.sqrt(delta)) / (2 * A)

console.log(`R1 = ${x1.toFixed(5)}`)
console.log(`R2 = ${x2.toFixed(5)}`)
} else {

    console.log(`Impossivel calcular`)
}



