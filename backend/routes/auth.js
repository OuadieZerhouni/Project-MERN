const express = require('express');
const router = express.Router();
const MongoClient = require('mongodb').MongoClient;

const uri = "mongodb://root1:0@localhost:27017/Project?retryWrites=true&w=majority";

router.post('/register', (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  // Connect to the database
  MongoClient.connect(uri, { useNewUrlParser: true }, async(err, client) => {
    if (err) {
      console.error(err);
      res.status(500).send(err);
      return;
    }

    const collection = client.db("Project").collection("users");

    // Check if the email already exists in users(_id, email, password)
    const emailExists = await collection.countDocuments({ email: email });
    if (emailExists>0) {
      res.status(400).send("Email already exists");
      console.log("Email already exists "+ emailExists);
      return;
    }
    else{
    collection.insertOne({ email: email, password: password }, (err, result) => {
      if (err) {
        console.error(err);
        res.status(500).send(err);
        return;
      }
      res.send("User created-----"+result.insertedId);  
      console.log("User created-----"+result.insertedId);
      client.close();
    })} ;
  } );
});

module.exports = router;