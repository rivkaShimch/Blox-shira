const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
require('dotenv').config();
const app = express();
require('./database');
app.use(express.json());


app.use(express.static(path.join(__dirname, 'build')));


app.use(cors())

const fileupload = require('express-fileupload');
app.use(fileupload({ createParentPath: true }))


// API
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});


const users = require('./api/users');
app.use('/users', users);

const templates = require('./api/templates');
app.use('/templates', templates);

const templateImages = require('./api/templateImages');
app.use('/templateImages', templateImages);

app.use(express.static(path.join(__dirname, '../build')))
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../build'))
})

const port = process.env.PORT || 9000;


// app.use((req, res, next) => {
//     res.header("Access-Control-Allow-Origin", "*")
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
//     if (req.method == "OPTIONS") {
//         res.header("Access-Control-Allow-Methods", "PUT, POST, DELETE, GET");
//         return res.status(200).json({})
//     }
//     next();
// });

// app.all("/*", function (req, res, next) {
//     res.header("Access-Control-Allow-Origin", req.headers.origin);
//     res.header("Access-Control-Allow-Credentials", true);
//     res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
//     res.header('Access-Control-Allow-Headers', 'Content-Type,Accept,X-Access-Token,X-Key,Authorization,X-Requested-With,Origin,Access-Control-Allow-Origin,Access-Control-Allow-Credentials');
//     if (req.method === 'OPTIONS') {
//         res.status(200).end();
//     } else {
//         next();
//     }
// });
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});