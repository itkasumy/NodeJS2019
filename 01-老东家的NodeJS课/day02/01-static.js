const http = require('http')
const url = require('url')
const path = require('path')
const fs = require('fs')

const server = http.createServer((req, res) => {
    if (req.url === '/facicon.ico') return

    let pathname = url.parse(req.url).pathname;
    if (pathname.indexOf('.') === -1) {
        pathname += '/index.html';
    }
    let fileUrl = `./statics${path.normalize(pathname)}`
    let extname = path.extname(pathname)
    fs.readFile(fileUrl, (err, data) => {
        if (err) {
            fs.readFile('./statics/404.html', (err, data) => {
                if (err) res.end('页面丢失了...');
                res.writeHead(200, {'Content-Type': 'text/html;charset=UTF8'});
                res.end(data)
            });
            return
        }
        getMime(extname, (mime) => {
            res.writeHead(200, {'Content-Type': `${mime};charset=UTF8`});
            res.end(data)
        });
    })
})

server.listen(80, 'localhost')

function getMime(extname, callback) {
    fs.readFile('./mime.json', (err, data) => {
        if (err) {
            throw Error('找不到mime.json');
            return
        }
        let mime = JSON.parse(data)[extname] || 'text/plain'
        callback(mime)
    })
}
