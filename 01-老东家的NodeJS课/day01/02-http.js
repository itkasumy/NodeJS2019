var http = require('http')

http.createServer(function(req, res) {
  // res.setHeader('Content-Type', 'text/plain;charset=UTF8')
  res.writeHead(200, {'Content-Type': 'text/html;charset=UTF8'})
  res.write('买回世上千金笑，送尽平生百岁忧')
  res.end()
}).listen(3000, '127.0.0.1')
