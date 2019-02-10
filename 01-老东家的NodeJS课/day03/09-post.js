const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.set('view engine', 'ejs')

app.use(bodyParser.urlencoded({extended: false}));
// app.use(bodyParser.json());

app.get('/', (req, res) => res.render('form'));

app.post('/', (req, res) => {
    res.write('you posted: \n')
    res.end(JSON.stringify(req.body, null, 2));
});

app.listen(80);
