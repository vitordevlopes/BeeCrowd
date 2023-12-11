const path = require('path');
const currentFile = path.dirname(process.argv[1]);

//realiza a leitura das linhas no arquivo dev\stdin
var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8');
var lines = input.split('\r\n');



let valor = parseFloat(lines[0] );

notas = [100, 50, 20, 10, 5, 2]
moedas = [100, 50, 25, 10, 5, 1] // MULTIPLIQUEI OS VALORES DAS MOEDAS POR 100 PARA TER CALCULADOS DE DIVISÃO MAIS PRECISOS

console.log(`NOTAS:`)

// notas, esse for lê cada posição do array 'notas'
for (let indice = 0; indice < notas.length; indice++) {
    
        let qtdeNotas = parseInt(valor/notas[indice])
        valor = valor % notas[indice]
        console.log(`${qtdeNotas} nota(s) de R$ ${notas[indice].toFixed(2)}`)
    
    
}


console.log(`MOEDAS:`)

valor = Math.round(valor * 100)

for (let indice = 0; indice < moedas.length; indice++) {

  let qtdeMoedas = parseInt(valor / moedas[indice])
    valor = valor % moedas[indice]
   
        
    console.log(`${qtdeMoedas} moeda(s) de R$ ${(moedas[indice]/100).toFixed(2)}`)

    
}
