const http = require('http');

http.createServer((req, res) => {
  var str = '';
  var i = 0;
  req.on('data', (data) => {
    console.log(`第${i++}次收到数据`);
    str += data;
  });

  req.on('end', () => {
    console.log(str);
  });
}).listen(8080);