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


let [nota1, nota2, nota3, nota4] = lines.shift().split(" ");
let notaRecuperacao = parseFloat(lines[0])
let pesos = [2, 3, 4, 1]
let soma = pesos.reduce((a, b) => a + b, 0); // meti uma tal de função de seta aq pra somar o array



let media4Notas = (((nota1 * pesos[0]) + (nota2 * pesos[1]) + (nota3 * pesos[2]) + (nota4 * pesos[3])) / soma)

console.log(`Media: ${media4Notas.toFixed(1)}`)

if (media4Notas >= 7.0) {

    console.log(`Aluno aprovado.`)
} else if (media4Notas < 5.0) {

    console.log(`Aluno reprovado.`)
} else {

    let mediaRecuperacao

    console.log(`Aluno em exame.`)
    console.log(`Nota do exame: ${notaRecuperacao.toFixed(1)}`)

    mediaRecuperacao = (notaRecuperacao + media4Notas) / 2

    if (mediaRecuperacao >= 5.0) {

        console.log(`Aluno aprovado.`)
    } else {

        console.log(`Aluno reprovado.`)
    }

    console.log(`Media final: ${mediaRecuperacao.toFixed(1)}`)

}

