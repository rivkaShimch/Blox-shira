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
    }],
    shapes: [{
        id: { type: Number },
        x: { type: Number },
        y: { type: Number },
        fill: { type: String },
        points: [{ type: Number }],
        tension: { type: Number },
        shadowBlur: { type: Number },
        stroke: { type: String },
        display: { type: Boolean }
    }],
    element_img: [{
        id: { type: Number },
        x: { type: Number },
        y: { type: Number },
        width: { type: Number },
        height: { type: Number },
        src: { type: String }
    }],
    element_img_i: {
        type: Number
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
    brandColors: [{
        id: { type: Number },
        color: { type: String },
        type: { type: String },
    }],


})
module.exports = mongoose.model("Template", templateSchema, "templates")
