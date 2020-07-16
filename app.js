const express = require('express')
const app = express()
const port = 8080

app.get('/', (req, res) => {
    console.log('peticion aceptada a las'+new Date())
    res.send('server test OK')
})

app.listen(port, () => console.log(`Servidor de prueba OK`))