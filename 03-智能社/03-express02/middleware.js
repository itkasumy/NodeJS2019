const express = require('express');
const querystring = require('querystring');
const app = express();
app.listen(8080);

app.use((req, res, next) => {
  // req.a = 12;
  var str = '';
  req.on('data', (data) => {
    str += data;
  });

  req.on('end', () => {
    req.body = querystring.parse(str);
    next();
  });
});

app.use('/', (req, res) => {
  // console.log(req.a);
  console.log(req.body);
});
