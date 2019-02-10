const express = require('express')

const app = express()
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.render('demo', {
        news: [
            '刘强东发新年信，称要时刻反思',
            '百度9亿拿下春晚',
            '苹果1个月内市值反弹1000亿美元'
        ]
    })
})

app.listen(80);
