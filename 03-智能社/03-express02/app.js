const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// app.use(bodyParser.urlencoded({
//   extended: true,
//   limit: 2 * 1024 * 1024
// }))

// app.use('/', (req, res) => {
//   // console.log(req.query);  // GET
//   console.log(req.body);  // POST
//   res.send('abc');
//   res.end();
// });

app.use('/', (req, res, next) => {
  console.log('a');
  next();
});

app.use('/', (req, res, next) => {
  console.log('b');  
});

app.listen(8080);
