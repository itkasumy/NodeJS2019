const fs = require('fs');

exports.getAllAlbums = (callback) => {
    fs.readdir('./uploads', (err, files) => {
        const allAlbums = [];

        if (err) {
            callback('没有找到uploads文件夹', allAlbums)
        }
        (function iterator(i) {
            if (i === files.length) {
                callback(null, allAlbums);
                return
            }

            fs.stat(`./uploads/${files[i]}`, (err, stat) => {
                if (err) {
                    callback(`找不到文件${files[i]}`, null)
                }
                if (stat.isDirectory()) {
                    allAlbums.push(files[i]);
                }
                iterator(i + 1)
            })
        })(0)
    })
}

exports.getAllImagesByAlbumName = (albumName, callback) => {
    if (albumName === 'favicon.ico') {
        return
    }
    // console.log(`./uploads/${albumName}`);
    fs.readdir(`./uploads/${albumName}`, (err, files) => {
        const allImgs = [];

        if (err) {
            callback('没有找到uploads文件夹', allImgs)
            return
        }

        (function iterator(i) {
            if (i === files.length) {
                console.log(allImgs);
                callback(null, allImgs);
                return
            }
            fs.stat(`./uploads/${albumName}/${files[i]}`, (err, stat) => {
                if (err) {
                    callback(`找不到文件${files[i]}`, null)
                    return
                }
                if (stat.isFile()) {
                    allImgs.push(files[i]);
                }
                iterator(i + 1)
            })
        })(0)
    })
}
