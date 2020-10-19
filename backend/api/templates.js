const express = require('express');
const router = express.Router()
const Template = require('../models/Template');
var fs = require('fs');
var path = require('path');
var multer = require('multer');

var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads')
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now())
    }
});

var upload = multer({ storage: storage });
router.get('/', (req, res) => {
    Template.find()
        .then(templates => res.json(templates))
        .catch(err => console.log(err))
})
router.post('/add', upload.single('image'), (req, res) => {
    const type = req.body.type;
    const background_img = req.body.background_img;
    const title = req.body.title;
    const title_size = req.body.title_size;
    const title_color = req.body.title_color;
    const title_type = req.body.title_type;
    const title_position = req.body.title_position;
    const element_img = req.body.element_img;
    const element_position = req.body.element_position;
    const element_size = req.body.element_size;

    //get the image name
    var back_img_name = background_img.split("\\");
    console.log(back_img_name[2])

    const newTemplate = new Template({
        type: type,
        background_img: { data: fs.readFileSync(path.join(__dirname + '/uploads/' + back_img_name[2])), contentType: 'image/png' },
        title: title,
        title_size: title_size,
        title_color: title_color,
        title_type: title_type,
        title_position: title_position,
        element_img: { data: element_img, contentType: 'image/png' },
        element_position: element_position,
        element_size: element_size
    })
    newTemplate.save()
        .then(() => res.json({
            message: "Created Template successfully"
        }))
        .then((res) => {
            console.log(res)
        })
        .catch(err => res.status(400).json({
            "error": err,
            "message": "Error creating template"
        }))
})

module.exports = router 