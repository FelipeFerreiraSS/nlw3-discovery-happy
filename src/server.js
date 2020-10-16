// importar dependencia
const express = require('express');
const path = require('path');
const pages = require('./pages.js')

//iniciar o express
const server = express()
server
//utilizando os arquivos estaticos
.use(express.static('public'))

//configurar templetes engine
.set('views', path.join(__dirname, "views"))
.set('view engine', 'hbs')

//criar uma rota 
.get('/', pages.index)
.get('/orphanage', pages.orphanage)
.get('/orphanages', pages.orphanages)
.get('/create-orphanage', pages.createOrphanage)

//ligar o servidor
server.listen(5500)
