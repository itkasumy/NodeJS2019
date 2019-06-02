const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res) => {
  console.log(req.method, req.url)
  console.log(req.headers)

  res.statusCode = 200
  if (req.url == '/') {
    fs.readFile('02-index.html', (err, data) => {
      res.setHeader('Content-Type', 'text/html;charset=utf-8')
      res.write(data)
      res.end()
    })
  } else if (req.url == '/02-style.css') {
    fs.readFile('02-style.css', (err, data) => {
      res.setHeader('Content-Type', 'text/css;charset=utf-8')
      res.write(data)
      res.end()
    })
  } else if (req.url == '/02-index.js') {
    fs.readFile('02-index.js', (err, data) => {
      res.setHeader('Content-Type', 'application/x-javascript;charset=utf-8')
      res.write(data)
      res.end()
    })
  } else if (req.url == '/favicon.ico') {
    res.end()
  }
})

server.listen(8080)
