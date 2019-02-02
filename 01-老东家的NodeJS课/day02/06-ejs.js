const http = require('http')
const ejs = require('ejs')
const fs = require('fs')

http.createServer((req, res) => {
    if (req.url === '/favicon.ico') return
    let html = '';
    res.writeHead(200, {'Content-Type': 'text/html;charset=UTF8'});
    fs.readFile('./views/index.ejs', (err, data) => {
        if (err) {
            throw Error('模板文件读取失败');
        }
        let template = data.toString();
        let dictionary = {a: 6};
        html = ejs.render(template, dictionary);
        res.write(html);
        res.end();
    });
}).listen(80, 'localhost');