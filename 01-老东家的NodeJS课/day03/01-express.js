const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('Hello')
});

app.get('/haha', (req, res) => {
    res.send('哈哈哈哈')
});

app.listen(80)
