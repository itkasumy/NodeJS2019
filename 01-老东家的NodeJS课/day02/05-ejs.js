const ejs = require('ejs')

let string = '今天买了一个iPhone<%= a %>s';
const data = {
    a: 6
};

const html = ejs.render(string, data)
console.log(html);
