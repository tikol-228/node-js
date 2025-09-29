const http = require('http')
const PORT = 8000

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.writeHead(200, {'content-type':'text/plain'})
    res.end('homepage')
  } else if (req.url === '/about') {
    res.writeHead(200, {'content-type':'text/plain'})
    res.end('about')
  } else {
    res.writeHead(404, {'content-type':'text/plain'})
    res.end('page not found')
  }
})

server.listen(PORT, 'localhost', () => {
  console.log(`server is running at port ${PORT}`)
})