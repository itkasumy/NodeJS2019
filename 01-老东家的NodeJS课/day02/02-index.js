const http = require('http')
const router = require('./02-router.js')

http.createServer((req, res) => {
    if (req.url === '/') {
        router.showIndex(req, res);
    } else if (req.url.substr(0, 8) === '/student') {
        router.showStudent(req, res);
    } else {
        router.show404(req, res);
    }
}).listen(80, 'localhost')
