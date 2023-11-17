const http = require('http');
const fs = require('fs')

//creating a server using raw node.js
const server = http.createServer()

//listerner
server.on('request', (req, res) => {
    if(req.url === 'read-file', req.method === 'GET'){

    }
    const readableStream = fs.createReadStream(process.cwd() + '/text/read.txt')

    readableStream.on('data', (buffer) => {
        res.statusCode = 200
        res.write(buffer)
    })
    
    readableStream.on('data', () => {      
        res.statusCode = 200
        res.end('Hello from world !')
    })

    readableStream.on('error', (error) => {  
        console.log(error)    
        res.statusCode = 500
        res.end('Something went wrong!')
    })

})

server.listen(5000, () => {
    console.log('server is listening on port 5000');
})