const http = require('http');
const url = require('url');
const fs = require('fs');
const path = require('path')

http.createServer((req, res) => {
  let pathname = url.parse(req.url).pathname;
  if (pathname === '/') pathname = 'index.html'
  // console.log(pathname)
  let extname = path.extname(pathname)

  fs.readFile(`./static/${pathname}`, (err, data) => {
    if (err) {
      fs.readFile('./static/404.html', (err, data) => {
        if (err) throw err;
        res.writeHead(404, {'Content-Type': 'text/html;charset=UTF8'});
        res.end(data);
      })
      return;
    }
    
    let mime = getMIME(extname)
    // res.writeHead(404, {'Content-Type': 'text/html;charset=UTF8'});
    res.writeHead(404, {'Content-Type': `${mime};charset=UTF8`});
    res.end(data);
  });
}).listen(3000, '127.0.0.1');

function getMIME(extname) {
  switch(extname) {
    case '.html':
      return 'text/html'
    case '.jpg':
      return 'image/jpg'
    case '.css':
      return 'text/css'
  }
}
