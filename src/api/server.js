const express = require('express')
const cors = require('cors')
// create budget router
const budgetRouter = require('')

const server = express()

server.use(express.json())
server.use(cors)
server.use('/budget', budgetRouter)


server.get('/', (req, res) => {
    res.json({MikeSays: "We up!"})
})