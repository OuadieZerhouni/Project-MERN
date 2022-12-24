
const express = require('express');
const googleAuth = require('./routes/google');

const app = express();
app.use('/auth', googleAuth);
app.listen(3000, () => console.log('Server listening on port 3000'));