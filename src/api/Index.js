const server = require('./server')

const PORT = 3001

server.listen(PORT, () => {
    console.log(`\n=== Server listening on port ${PORT} ===\n`)
})
// get port to run while FE runs