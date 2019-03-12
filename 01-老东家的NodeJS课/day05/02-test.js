const express = require('express');
const app = express();
const db = require('./model/db');

app.get('/', (req, res) => {
    db.insertOne('teacher', {
        "name": "lm",
        "age": 24
    }, (err, result) => {
        if (err) {
            console.log('插入失败');
            return
        }
        res.send('插入成功!');
    })
})

app.listen(80);
