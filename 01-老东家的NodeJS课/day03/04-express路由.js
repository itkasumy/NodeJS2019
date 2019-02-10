const express = require('express')

const app = express();

app.get('/AAb', (req, res) => {
    res.send('您好，ksm');
});

app.get('/student/:id', (req, res) => {
    const id = req.params['id'];
    res.send(id);
});

app.listen(80);
