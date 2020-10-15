// importar dependencia
const express = require('express');
const path = require('path');

//iniciar o express
const server = express()
server
//utilizando os arquivos estaticos
.use(express.static('public'))

//criar uma rota 
server.get('/', (request,response) => {
    return response.sendFile(path.join(__dirname, 'views', 'index.html'))
})

//ligar o servidor
server.listen(5500)
