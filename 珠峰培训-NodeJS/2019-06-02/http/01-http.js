const http = require('http')

const server = http.createServer((req, res) => {
  console.log(req.method, req.url)
  console.log(req.headers)

  res.statusCode = 200
  res.setHeader('Content-Type', 'text/html;charset=utf-8')
  res.setHeader('name', 'ksm')
  res.write(new Date().toString())
  res.end()
})

server.listen(8080)
