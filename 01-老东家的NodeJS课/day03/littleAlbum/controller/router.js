const file = require('../models/file')

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
