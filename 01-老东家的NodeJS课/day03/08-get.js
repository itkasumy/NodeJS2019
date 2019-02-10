const express = require('express');

const app = express();

app.get('/', (req, res) => {
    console.log(req.query);
    res.send();
});

app.listen(80);
