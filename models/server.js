const express = require('express')
const cors = require('cors')

class Server {

    constructor() {
        this.app = express()
        this.port = process.env.PORT
        this.usersPath = '/api/users'

        // Middlewares
        this.middlewares()

        // rutas de mi aplicación
        this.routes()
    }

    middlewares() {

        // CORS
        this.app.use( cors() )

        // Lectura y parseo
        this.app.use( express.json() )

        // Directorio Público
        this.app.use( express.static('public') )
    }

    routes() {
        this.app.use(this.usersPath, require('../routes/user'))
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log('process running in port ', this.port);
        })
    }

}

module.exports = Server