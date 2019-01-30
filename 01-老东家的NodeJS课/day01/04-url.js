const http = require('http')
const url = require('url')

http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/html;charset=UTF8'})
  const urlStr = req.url
  const urlObj = url.parse(urlStr)

  let pathname = urlObj.pathname
  let queryStr = urlObj.query
  
  let queryObj = url.parse(urlStr, true).query
  let name = queryObj.name
  let age = queryObj.age

  res.write(`pathname: ${pathname}<br />`)
  res.write(`queryStr: ${queryStr}<br />`)
  res.write(`name: ${name}<br />`)
  res.write(`age: ${age}<br />`)

  res.end()
}).listen(3000, '127.0.0.1')
