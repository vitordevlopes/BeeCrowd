const path = require('path');
const currentFile = path.dirname(process.argv[1]);

//realiza a leitura das linhas no arquivo dev\stdin
var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8');
var lines = input.split('\r\n').map(Number);



arrayIntervalo = []
let somaValoresImpares = 0

if (lines[0] === lines[1]) {
    
    console.log('0')

    return
}

if (lines[0] > lines[1]) {
    
    for (let i = lines[0] - 1; i > lines[1]; i--) {
        
        arrayIntervalo.push(i)
    }

    for ( i = 0; i < arrayIntervalo.length; i++) {

        let restoDivisao = arrayIntervalo[i] % 2

        if (restoDivisao != 0) {
            
            somaValoresImpares = somaValoresImpares + arrayIntervalo[i]

            
        }
    }

} else if (lines[0] < lines[1]) {

    for (let i = lines[0] + 1; i < lines[1]; i++) {
        
        arrayIntervalo.push(i)
    }

    for ( i = 0; i < arrayIntervalo.length; i++) {

        let restoDivisao = arrayIntervalo[i] % 2

        if (restoDivisao != 0) {
            
            somaValoresImpares = somaValoresImpares + arrayIntervalo[i]

            
        }
    }
}

console.log(somaValoresImpares)






