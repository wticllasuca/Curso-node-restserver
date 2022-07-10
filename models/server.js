const express = require('express')
const cors = require('cors') //para inpedir coneciones de paginas externas

class Server{
    constructor(){
        this.app = express()
        this.puerto = process.env.PORT
        //Middlwares -- funciones que se ejecutan con la app
        this.middlewares()
        //Rotas de mi aplicacion
        this.routes()
    }
    middlewares(){
        //CORS
        this.app.use(cors())
        //Lectura y parseo de body
        this.app.use(express.json())
        //Directorio publico
        this.app.use(express.static('public'))
    }
    routes(){
        this.app.use('/api/usuarios',require('../routes/usuarios'))
    }
    listen(){
        this.app.listen(this.puerto)
    }
}

module.exports = Server  