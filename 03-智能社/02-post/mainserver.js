const http = require('http');
const fs = require('fs');
const querystring = require('querystring');
const url = require('url');

const server = http.createServer((req, res) => {
  var obj = url.parse(req.url, true);
  var pathname = obj.pathname;
  const GET = obj.query;

  var str = '';
  req.on('data', (data) => {
    str += data;
  });
  req.on('end', () => {
    const POST = querystring.parse(str);
    console.log(pathname, GET, POST);
  });
}).listen(8080);