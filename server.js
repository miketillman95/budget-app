const express = require('express')
const cors = require('cors')
const helmet = require('helmet')
// create budget router
// const budgetRouter = require('')

const server = express()

server.use(express.json())
server.use(helmet())
server.use(cors())
// server.use('/budget')


server.get('/', (req, res) => {
    res.json({MikeSays: "We up!"})
})

module.exports = server