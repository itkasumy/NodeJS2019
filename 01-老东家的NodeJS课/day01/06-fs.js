const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res) => {
  if (req.url == '/favicon.ico') return

  let userId = parseInt(Math.random() * 89999) + 10000
  console.log('欢迎', userId)

  res.writeHead(200, {'Content-Type': 'text/html;charset=UTF8'})

  fs.readFile('./poem', (err, data) => {
    if (err) throw err

    console.log(userId, '文件读取完毕！')
    res.end(data)
  })
})

server.listen(3000, '127.0.0.1')
