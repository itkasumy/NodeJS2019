const express = require('express');
const app = express();
const router = require('./controller')

app.set('view engine', 'ejs');

app.use(express.static('./public'));
app.use(express.static('./uploads'));

app.get('/', router.showIndex);

app.get('/:albumName', router.showAlbum);

app.get('/upload', router.showUpload);

app.post('/upload', router.doPost);

app.use((req, res) => {
    res.render('err')
})

app.listen(80);
