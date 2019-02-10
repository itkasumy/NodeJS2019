const express = require('express');
const pug = require('pug');

const app = express();
app.set('view engine', 'pug');
app.engine('pug', pug.__express);

app.get('/', (req, res) => {
    res.render('demo', {pageTitle: 'Pug'})
});

app.listen(80);
