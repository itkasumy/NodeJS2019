const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const app = express();

app.use(cookieParser('fwshao945la'));

app.use('/aaa/a.html', (req, res, next) => {
  req.secret = 'fwshao945la';
  res.cookie('name', 'ksm', {path: '/aaa', maxAge: 30 * 24 * 3600 * 1000, signed: true});
  console.log(req.signedCookies);
  console.log(req.cookies);
  
  res.send('abc');
});

app.listen(8080);
