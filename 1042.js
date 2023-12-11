//importo o modulo fs (filesystem) para trabalhar com arquivos e diretorios
const fileSystem = require("fs");

//importo o modulo path para trabalhar com o endereço de arquivos e diretorios
const endereco = require("path");

//descubro o endereço de onde meu script js esta salvo
//ex: c:\documentos\javascript
const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);

//realiza a leitura das linhas no arquivo dev\stdin que foi criado
const conteudoArquivo = fileSystem.readFileSync(
  enderecoDesteScriptJS + "\\dev\\stdin",
  "utf8"
);

//define qual é a quebra de linha utilizada no seu sistema operacional
//se você estiver utilizando linux coloque \n se for windows coloque \r\n
const quebraLinhaWindows = "\r\n";

let lines = conteudoArquivo.split(quebraLinhaWindows);

let [A, B, C] = lines.shift().split(" ");

let arrayCrescente = [A, B, C];

let numerosOriginais = [...arrayCrescente];

let [final1, final2, final3] = numerosOriginais;

let [primeiro, segundo, terceiro] = arrayCrescente.sort(comparacao);

console.log(`${primeiro}\n${segundo}\n${terceiro}\n`);

console.log(`${final1}\n${final2}\n${final3}`);

function comparacao(a, b) {
  return a - b;
}
