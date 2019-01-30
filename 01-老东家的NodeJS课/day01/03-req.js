const http = require('http')

http.createServer((req, res) => {
  res.write(req.url)
  res.end()
}).listen(3000, '127.0.0.1')
