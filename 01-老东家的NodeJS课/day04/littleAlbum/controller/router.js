const file = require('../models/file')
const formidable = require('formidable')
const path = require('path')
const fs = require('fs')

exports.showIndex = (req, res, next) => {
    file.getAllAlbums((err, allAlbums) => {
        if (err) {
            next()
            return
        }
        res.render('index', {
            'albums': allAlbums
        })
    })
}

// res.writeHead(200, {'Content-Type': 'text/html;charset=UTF8'});
// res.end(`相册${req.params.albumName}`);
exports.showAlbum = (req, res, next) => {
    let albumName = req.params.albumName
    file.getAllImagesByAlbumName(albumName, (err, imgsArr) => {
        if (err) {
            next();
            return
        }
        res.render('album', {
            albumName: albumName,
            images: imgsArr
        });
    })
}

exports.showUpload = (req, res, next) => {
    file.getAllAlbums((err, allAlbums) => {
        if (err) {
            next()
            return
        }
        res.render('upload', {
            albums: allAlbums
        });
    })
}

exports.doPost = (req, res, next) => {
    var form = new formidable.IncomingForm();

    form.uploadDir = path.normalize(`${__dirname}/../tempupload/`)

    form.parse(req, (err, fields, files) => {
        // res.writeHead(200, {'content-type': 'text/plain'});
        // res.write('received upload: \n\n');
        // res.end(util.inspect({fields: fields, files: files}));
        console.log(fields);
        console.log(files);
        if (err) {
            next();
            return
        }

        let size = parseInt(files.tupian.size);
        if (size > 1024) {
            fs.unlink(files.tupian.path);
            return
        }

        let tm = new Date().getTime()
        let rand = parseInt(Math.random() * 89999) + 10000
        let extname = path.extname(files.tupian.name)
        var wenjianjia = fields.wenjianjia;
        var oldpath = files.tupian.path;
        var newpath = path.normalize(`${__dirname}/../uploads/${wenjianjia}/${tm}${rand}${extname}`)
        fs.rename(oldpath, newpath, err => {
            if (err) {
                res.send('图片尺寸应该小于1M');
            }
        })
    });

    res.end('success!');
}
