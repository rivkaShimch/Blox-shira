const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const templateImageSchema = new Schema({
    image: {
        type: String
    },
    name: {
        type: String,
        required: true
    }
})
module.exports = mongoose.model("templateImage", templateImageSchema, "templateImages")