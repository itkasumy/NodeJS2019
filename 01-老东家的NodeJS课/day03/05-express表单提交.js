const express = require('express');

const app = express();
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('form');
});

app.post('/', (req, res) => {
    res.send('成功!');
});

app.listen(80);
