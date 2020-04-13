const express = require("express")
const cors = require("cors")
const helmet = require("helmet")

const bookRouter = require("./book-router/book-router")

const server = express()

server.use(helmet())
server.use(cors())
server.use(express.json())
server.use('/books', bookRouter)


module.exports = server;