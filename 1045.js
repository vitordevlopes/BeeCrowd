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


let [A, B, C] = lines.shift().split(" ").map(parseFloat);
let temp = A



// descobrindo se A tem o maior lado e substituindo as variaveis se necessário
if (A < B) {
    A = B
    B = temp
} if (A < C) {
    B = A
     A = C
     C = temp
 }

// criando array com ordem decrescete, do maior para o  menor
arrayDecrescente = [A, B, C].sort((a, b) => b - a)  

// DETERMINANDO OS TIPOS DE TRIANGULO


if (A >= (B + C)) {
    console.log("NAO FORMA TRIANGULO")
    return
}


if (Math.pow(A, 2) === (Math.pow(B, 2) + Math.pow(C, 2))) {
    console.log("TRIANGULO RETANGULO")

} else if (Math.pow(A, 2) > (Math.pow(B, 2) + Math.pow(C, 2))) {
    console.log("TRIANGULO OBTUSANGULO")

} else if (Math.pow(A, 2) < (Math.pow(B, 2) + Math.pow(C, 2))) {
    console.log("TRIANGULO ACUTANGULO")
} 

if (A === B && B === C) {
    console.log("TRIANGULO EQUILATERO")

} else if (A === B || B === C || C === A) {

    console.log("TRIANGULO ISOSCELES")
}