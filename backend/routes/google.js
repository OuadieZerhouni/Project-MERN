
const express = require('express');
const session = require('express-session');
const cors = require('cors');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const MongoClient = require('mongodb').MongoClient;
const jwt = require('jsonwebtoken');


const app = express();
app.use(session({
    secret: 'your-secret-key',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true }
  }));
app.use(cors());
app.use(cors({
    origin: '*'
  }));
// Replace with your MongoDB connection string and database name
const MONGODB_URI = 'mongodb://root1:0@127.0.0.1:27017/Project?retryWrites=true&w=majority';
const MONGODB_DB_NAME = 'Project';

// Replace with your Google client ID and client secret
const GOOGLE_CLIENT_ID = '...';
const GOOGLE_CLIENT_SECRET = '...';

// Configure the Google strategy for Passport
passport.use(new GoogleStrategy({
  clientID: GOOGLE_CLIENT_ID,
  clientSecret: GOOGLE_CLIENT_SECRET,
  callbackURL: "http://localhost:3000/auth/google/callback"
},
async function(accessToken, refreshToken, profile, cb) {
  // Connect to the database
  const client = new MongoClient(MONGODB_URI, { useNewUrlParser: true });
  await client.connect();

  // Save the user to the database
  const db = client.db(MONGODB_DB_NAME);
  const usersCollection = db.collection('users');
  //if user doesn4t extist, create it
  if (await usersCollection.findOne
    ({googleId: profile.id}) === null) {
    await usersCollection.insertOne(profile);
  }
  const token = jwt.sign(profile, 'secret', { expiresIn: '24h' });
  client.close();

  return cb(null, profile);
}
));

// Serialize and deserialize user for the session
passport.serializeUser(function(user, cb) {
  cb(null, user);
});

passport.deserializeUser(function(obj, cb) {
  cb(null, obj);
});

// Initialize Passport and restore authentication state, if any, from the session
app.use(passport.initialize());
app.use(passport.session());

// Add the Google login route
app.get('/google',
  passport.authenticate('google', { scope: ['profile'] }));

// Add the Google login callback route
app.get('/google/callback', 
  passport.authenticate('google', { failureRedirect: '/login' }),
  function(req, res) {
    res.redirect('http://localhost:3001/dashboard');
  });

  module.exports = app;
