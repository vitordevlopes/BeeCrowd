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
let [A, B, C] = lines.shift().split(" "); 

A = parseFloat(A)
B = parseFloat(B)
C = parseFloat(C)


const PI = 3.14159;

let areaTriangulo = ((A * C) / 2)

console.log(`TRIANGULO: ${areaTriangulo.toFixed(3)}`)

let areaCirculo = PI * Math.pow(C, 2)

console.log(`CIRCULO: ${areaCirculo.toFixed(3)}`)

let areaTrapezio = ((A + B) * C) / 2

console.log(`TRAPEZIO: ${areaTrapezio.toFixed(3)}`)

let areaQuadrado = B * B

console.log(`QUADRADO: ${areaQuadrado.toFixed(3)}`)

let areaRetangulo = A * B

console.log(`RETANGULO: ${areaRetangulo.toFixed(3)}`)

/* TRIANGULO: 7.800
CIRCULO: 84.949
TRAPEZIO: 18.200
QUADRADO: 16.000
RETANGULO: 12.000
*/

