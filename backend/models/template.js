const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const templateSchema = new Schema({
    type: {
        type: String,
        required: true
    },
    background_img: {
        data: Buffer,
        contentType: String
    },
    title: {
        type: String
    },
    title_size: {
        type: String
    },
    title_color: {
        type: String
    },
    title_type: {
        type: String
    },
    title_position: {
        type: String
    },
    element_img:
    {
        data: Buffer,
        contentType: String
    },
    element_position: {
        type: String
    },

})
module.exports = mongoose.model("Template", templateSchema, "templates")
