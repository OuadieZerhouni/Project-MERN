
const express = require('express');
const googleAuth = require('./routes/google');
const database = require('./api/database');

const app = express();
app.use('/auth', googleAuth);
app.use('/api/database', database)
app.listen(3000, () => console.log('Server listening on port 3000'));