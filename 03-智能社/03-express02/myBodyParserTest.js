const express = require('express');
const myBodyParser = require('./libs/my-body-parser');
const app = express();
app.listen(8080);

app.use(myBodyParser);

app.use('/', (req, res) => {
  // console.log(req.a);
  console.log(req.body);
});
