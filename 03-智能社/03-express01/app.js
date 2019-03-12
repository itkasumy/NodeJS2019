const express = require('express');

const app = express();

// app.use('/', (req, res) => {
//   res.send('abc');
//   res.end();
// });

const users = {
  'ksm': '123456',
  'wlm': '654321',
  'xml': '666666'
};

app.get('/login', (req, res) => {
  let user = req.query['user'];
  let pass = req.query['pass'];

  if (users[user] == null) {
    res.send({ok: false, msg: '此用户不存在!'});
  } else {
    if (users[user] != pass) {
      res.send({ok: false, msg: '密码输入错误!'});
    } else {
      res.send({ok: true, msg: '登陆成功'});
    }
  }
});

app.use(express.static(`${__dirname}/www`));

app.listen(8080);
