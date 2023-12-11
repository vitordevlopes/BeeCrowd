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
let [a, b, c,] = lines.shift().split(" ");

a = parseInt(a);
b = parseInt(b);
c = parseInt(c);

calcularMaiorValor(a, b, c)

}

function calcularMaiorValor(a, b, c) {

    //let valorMaior = ((a + b) + Math.abs((a - b))) / 2
    let valorMaiorAB = ((a + b) + Math.abs(a - b)) / 2;

    let valorMaiorABC = ((valorMaiorAB + c) + Math.abs(valorMaiorAB - c)) / 2

console.log(`${valorMaiorABC} eh o maior`)
}

// O PROBLEMA PEDE QUE EU FAÇA UM CODIGO, USANDO UMA FORMULA QUE DESCUBRA O MAIOR INTEIRO ENTRE 3 NÚMEROS. A FORMULA DADA PELO BEECROWD SOMENTE DESCOBRE OS 2 PRIMEIROS INTEIROS.

// TENHO QUE CALCULAR O MAIOR ENTRE ESSES DOIS PRIMEIROS, E O RESULTADO COMPARAR COM O TERCEIRO VALOR PELA MESMA FORMULA.