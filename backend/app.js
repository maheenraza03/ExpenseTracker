
require('dotenv').config()

const PORT = process.env.PORT

const server = () => {
    console.log('hello to port:', PORT)
}

server()