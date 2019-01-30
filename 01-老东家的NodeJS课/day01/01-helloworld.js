var http = require('http')

server = http.createServer(function(req, res) {
  res.writeHead(200, {'Content-type': 'text/html;charset=UTF8'})
  res.end('Hello NodeJS ——KSM')
})

server.listen(3000, '127.0.0.1')
