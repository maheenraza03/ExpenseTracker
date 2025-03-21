const express = require('express')
const cors = require('cors')
const app = express()

require('dotenv').config()

const PORT = process.env.PORT

//middlewares

app.use(express.json())
app.use(cors())

const server = () => {
    app.listen(PORT, () => {
        console.log('Hello to port:', PORT)
    })
}

server()