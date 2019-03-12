const express = require('express');
const cookieParser = require('cookie-parser');
const cookieSession = require('cookie-session');

const app = express();

app.use(cookieParser());
app.use(cookieSession({
  name: 'ksm',
  keys: ['aaa', 'bbb', 'ccc']
}))

app.use('/', (req, res, next) => {
 if (req.session['count'] == null) {
   req.session['count'] = 1;
 } else {
   req.session['count']++;
 }

 console.log(req.session['count']);
 
  
  res.send('ok');
});

app.listen(8080);
