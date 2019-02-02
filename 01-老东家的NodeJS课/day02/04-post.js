const http = require('http')
const formidable = require('formidable')
const util = require('util')
const fs = require('fs')
const path = require('path')

http.createServer((req, res) => {
    if (req.url === '/dopost' && req.method === 'POST') {
        const form = new formidable.IncomingForm();
        form.uploadDir = './uploads';
        form.parse(req, (err, fields, files) => {
            console.log(fields);
            console.log(files);
            res.writeHead(200, {'Content-Type': 'text/plain'});
            util.inspect({fields: fields, files: files});
            let tm = new Date().getTime()
            let rand = parseInt(Math.random() * 89999) + 10000
            let extname = path.extname(files.img.name)
            console.log(extname);
            let oldname = `${__dirname}/${files.img.path}`
            let newname = `${__dirname}/uploads/${tm}${rand}${extname}`
            fs.rename(oldname, newname, err => {
                if (err) throw Error('改名失败');
                res.writeHead(200, {'Content-Type': 'text/html;charset=UTF8'});
                res.end('改名成功');
            });
            res.end('success');
        });
    }
}).listen(80, 'localhost')
