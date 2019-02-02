exports.showIndex = (req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html;charset=UTF8'});
    res.end('我是首页');
}

exports.showStudent = (req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html;charset=UTF8'});
    res.end('我是学生页面');
}

exports.show404 = (req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html;charset=UTF8'});
    res.end('您要访问的页面丢失...');
}
