const http = require('http')

http.createServer((req, res) => {
  const userUrl = req.url

  res.writeHead(200, {'Content-Type': 'text/html;charset=UTF8'})

  userId = userUrl.substr(9)
  if (userUrl.startsWith('/student/')) {
    if (/\d{10}/.test(userId)) {
      res.end('您要查询的学生信息ID为' + userId)
    } else {
      res.end('学生学号位数不对')
    }
  } else if (userUrl.startsWith('/teacher/')) {
    if (/\d{6}/.test(userId)) {
      res.end('您要查询的老师信息ID为' + userId)
    } else {
      res.end('老师工号位数不对')
    }
  } else {
    res.end('请检查url是否正确')
  }
}).listen(3000, '127.0.0.1')
