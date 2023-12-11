const path = require('path');
const currentFile = path.dirname(process.argv[1]);

//realiza a leitura das linhas no arquivo dev\stdin
var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8');
var lines = input.split('\r\n');


let numeroDoMes = parseInt(lines[0]);

switch (numeroDoMes) {
    case 1:
        console.log('January')
        break;

        case 2:
        console.log('February')
        break;

        case 3:
        console.log('March')
        break;

        case 4:
        console.log('April')
        break;

        case 5:
        console.log('May')
        break;

        case 6:
        console.log('June')
        break;

        case 7:
        console.log('July')
        break;

        case 8:
        console.log('August')
        break;

        case 9:
        console.log('September')
        break;

        case 10:
        console.log('October')
        break;

        case 11:
        console.log('November')
        break;

        case 12:
        console.log('December')
        break;
    default:
        break;
}