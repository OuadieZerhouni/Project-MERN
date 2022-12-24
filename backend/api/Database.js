const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const cors = require('cors');


const app = express();
app.use(cors({
    origin: '*'
  }));

const MONGODB_URI = 'mongodb://root1:0@127.0.0.1:27017/Project?retryWrites=true&w=majority';
const MONGODB_DB_NAME = 'Project';

app.get('/users', (req, res) => {
    MongoClient.connect(MONGODB_URI, { useNewUrlParser: true })
        .then(client => {
            const db = client.db(MONGODB_DB_NAME);
            const usersCollection = db.collection('users');
            return usersCollection.find().toArray();
        })
        .then(users => res.json(users))
        .catch(error => console.error(error));
}
);

module.exports = app;