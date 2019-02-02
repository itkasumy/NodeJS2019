const http = require('http')
const querystring = require('querystring')

http.createServer((req, res) => {
    if (req.url === '/dopost' && req.method === 'POST') {
        let alldata = '';
        req.addListener('data', chunk => {
            alldata += chunk
        });

        req.addListener('end', () => {
            datastring = alldata.toString();
            // console.log(alldata.toString())
            const dataObj = querystring.parse(datastring);
            console.log(dataObj.name);
            console.log(dataObj.sex);
            res.end('success!');
        });
    }
}).listen(80, 'localhost')
