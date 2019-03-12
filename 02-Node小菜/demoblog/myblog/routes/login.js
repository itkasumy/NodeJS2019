var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/login', function(req, res, next) {
  res.render('login', { title: '登陆页面' });
});

router.post('/doLogin', function(req, res, next) {
  // res.render('login', { title: '登陆页面' });
});

module.exports = router;
