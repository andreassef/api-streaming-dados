const fs = require('fs')

fs.createReadStream('./assets/tristana.jpg')
    .pipe(fs.createWriteStream('./assets/tristana-stream.png'))
    .on('finish', () => console.log('Imagem foi escrita com sucesso'))