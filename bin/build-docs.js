const fs = require('fs');

const documentDir = './documents/';
const outPutFileName = './README.md';

const fileContentPieces = fs.readdirSync(documentDir).map(name => fs.readFileSync(documentDir + name, 'utf8'));
const fileContent = fileContentPieces.join("\n");

fs.writeFile(outPutFileName, fileContent, () => {
    console.log('\x1b[32mDocument is built successfully');
});
