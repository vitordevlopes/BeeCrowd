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

///////////////////////COLAR NO BEECROWD O CODIGO DESTE PONTO EM DIANTE///////////////////
//para ler linhas com mais de um valor na mesma linha use o comando a seguir
let [A, B] = lines.shift().split(" ");

A = parseInt(A);
B = parseInt(B);

descobrirMultiplo(A, B);

function descobrirMultiplo(A, B) {
  if (A % B === 0 || B % A === 0) {
    console.log("Sao Multiplos");
  } else {
    console.log("Nao sao Multiplos");
  }
}
