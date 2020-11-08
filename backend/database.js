const mongoose = require('mongoose');
const uri = process.env.ATLAS_URI;
const connection = "mongodb+srv://rivkaf:RaY3195914@cluster0.2z33f.mongodb.net/Blox?retryWrites=true&w=majority";
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true })
    .then(() => console.log("Database Connected Successfully"))
    .catch(err => console.log(err));