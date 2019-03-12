const MongoClient = require('mongodb').MongoClient;

const _connectDB = (callback) => {
    const url = 'mongodb://localhost:27017/haha';
    MongoClient.connect(url, (err, db) => {
        callback(err, db);
        console.log('数据库连接成功!');
    });
}

exports.insertOne = (collectionName, json, callback) => {
    _connectDB((err, db) => {
        db.collection(collectionName).insertOne(json, (err, result) => {
            callback(err, result);
            db.close();
        });
    });
}