const express = require('express');
const app = express();
const MongoClient = require('mongodb').MongoClient;

app.get('/', (req, res) => {
    // Connection URL
    const url = 'mongodb://localhost:27017';

// Database Name
    const dbName = 'myproject';

// Create a new MongoClient
    const client = new MongoClient(url);

// Use connect method to connect to the Server
    client.connect(function(err) {
        if (err) {
            console.log('数据库连接失败');
            return
        }
        console.log('数据库连接成功!');

        const db = client.db(dbName);

        client.close();
    });

    res.send('Hello')
});

app.listen(80)
