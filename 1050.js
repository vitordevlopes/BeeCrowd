const path = require('path');
const currentFile = path.dirname(process.argv[1]);

//realiza a leitura das linhas no arquivo dev\stdin
var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8');
var lines = input.split('\r\n');



let numeroDDD = parseInt(lines[0]);



switch (numeroDDD) {
    case 61:
        console.log('Brasilia')
        break;

    case 71:
        console.log('Salvador')    
        break;

    case 11:
        console.log('Sao Paulo')
        break;

    case 21:
        console.log('Rio de Janeiro')
        break;

    case 32:
        console.log('Juiz de Fora')
        break;
        
    case 19:
        console.log('Campinas')
        break;
        
    case 27:
        console.log('Vitoria')
        break;
        
    case 31:
        console.log('Belo Horizonte')
        break;

    default:
        console.log('DDD nao cadastrado')
        break;
}
