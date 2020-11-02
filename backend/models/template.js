const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const templateSchema = new Schema({
    template_name: {
        type: String
    },
    canvas_width: {
        type: Number,
    },
    canvas_height: {
        type: Number,
    },
    background_color: {
        type: String
    },
    background_img_name: {
        type: String,
    },
    background_img_path: {
        type: String,
    },
    titles: [{
        id: { type: Number },
        x: { type: Number },
        y: { type: Number },
        width: { type: Number },
        height: { type: Number },
        text: { type: String },
        align: { type: String },
        fill: { type: String },
        fontSize: { type: Number },
    }]
    ,
    titles_i: {
        type: Number
    },
    // title_align: {
    //     type: Number

    // },

    // title_size: {
    //     type: Number
    // },
    // title_width: {
    //     type: Number
    // },
    // title_height: {
    //     type: Number
    // },
    // title_color: {
    //     type: String
    // },
    // title_type: {
    //     type: String
    // },
    // title_position_x: {
    //     type: Number
    // },
    // title_position_y: {
    //     type: Number
    // },
    element_img:
    {
        type: String
    },
    element_position_x: {
        type: Number
    },
    element_position_y: {
        type: Number
    },
    element_width: {
        type: Number
    },
    element_height: {
        type: Number
    },

})
module.exports = mongoose.model("Template", templateSchema, "templates")
