
//require
const http = require('http')

//port for our server
const PORT = 3000

const server = http.createServer((req, res) => {
    res.writeHead(200, {"Content-Type": "application/json"})

    res.end(JSON.stringify({
        message: "Hello from the server",
        method: req.method
        }))
}
)


server.listen(PORT, () => {
    console.log(`server running on port:${PORT}`)
})

