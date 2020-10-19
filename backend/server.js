const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
require('dotenv').config();
const app = express();
require('./database');
app.use(express.json());
app.use(cors());

// API
const users = require('./api/users');
app.use('/users', users);

app.use(express.static(path.join(__dirname, '../build')))
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../build'))
})
const port = process.env.PORT || 9000;
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});