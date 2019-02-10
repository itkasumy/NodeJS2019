const express = require('express');
const app = express();

app.get('/:user/:id', (req, res, next) => {
    let username = req.params.user;
    if (username != 'admin') {
        console.log(1);
        res.send(`用户信息:${username}`)
    } else {
        next();
    }
});

app.get('/admin/login', (req, res) => {
    console.log(2);
    res.send('管理员登陆');
});

app.listen(80);
