const http = require('http')
const pug = require('pug')

http.createServer((req, res) => {
    if (req.url === '/favicon.ico') return
    const compileFunc = pug.compileFile('./views/index.pug');
    const html = compileFunc({
        pageTitle: 'This is a pug demo',
        youAreUsingPug: true
    });
    res.writeHead(200, {'Content-Type': 'text/html;charset=UTF8'});
    res.write(html);
    res.end();
}).listen(80, 'localhost');