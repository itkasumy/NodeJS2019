const express = require('express')
const app = express()

app.use(express.static('./public'));

app.get('/haha', (req, res) => {
    res.send('很爱很爱你');
});

app.listen(80);