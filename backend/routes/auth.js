const express = require('express');
const router = express.Router();
const MongoClient = require('mongodb').MongoClient;

// Replace <URI> with the connection string for your MongoDB database
const uri = "MyDB";

router.post('/register', (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  // Connect to the database
  MongoClient.connect(uri, { useNewUrlParser: true }, (err, client) => {
    if (err) {
      console.error(err);
      res.status(500).send(err);
      return;
    }

    const collection = client.db("test").collection("users");
    // Insert the new user into the "users" collection
    collection.insertOne({ email: email, password: password }, (err, result) => {
      if (err) {
        console.error(err);
        res.status(500).send(err);
        return;
      }
      res.send(result.ops[0]);
      client.close();
    });
  });
});

module.exports = router;