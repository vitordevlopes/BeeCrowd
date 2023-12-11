const path = require('path');
const currentFile = path.dirname(process.argv[1]);

//realiza a leitura das linhas no arquivo dev\stdin
var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8');
var lines = input.split('\r\n');


let colocacaoCompetidor = parseFloat(lines[0]);

// top: 1, 3, 5, 10, 25, 50 e 100

if (colocacaoCompetidor === 1) {
    
    console.log('Top 1')

    return
}

if (colocacaoCompetidor >= 2 && colocacaoCompetidor <= 3) {
    
    console.log('Top 3')
    
    return
}

if (colocacaoCompetidor >= 4 && colocacaoCompetidor <= 5) {
    
    console.log('Top 5')

    return
}

if (colocacaoCompetidor >= 6 && colocacaoCompetidor <= 10) {
    
    console.log('Top 10')

    return
}

if (colocacaoCompetidor >= 11 && colocacaoCompetidor <= 25) {
    
    console.log('Top 25')

    return
}

if (colocacaoCompetidor >= 26 && colocacaoCompetidor <= 50) {
    
    console.log('Top 50')

    return
}

if (colocacaoCompetidor >= 51 && colocacaoCompetidor <= 100) {
    
    console.log('Top 100')

    return
}