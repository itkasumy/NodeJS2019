const http = require('http')
const fs = require('fs')
const mime = require('mime')

const server = http.createServer((req, res) => {
  console.log(req.method, req.url)

  res.statusCode = 200
  if (req.url == '/') {
    fs.readFile('03-index.html', (err, data) => {
      res.setHeader('Content-Type', 'text/html;charset=utf-8')
      res.write(data)
      res.end()
    })
  } else if (req.url == '/favicon.ico') {
    res.end()
  } else {
    static(req.url, res)
  }
})

function static(url, res) {
  res.setHeader('Content-Type', `${mime.getType(url)};charset=utf-8`)
  fs.readFile(url.slice(1), (err, data) => {
    res.write(data)
    res.end()
  })
}

server.listen(8080)
