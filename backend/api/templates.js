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


router.get('/find', (req, res) => {
    Template.find({ template_name: req.query.template_name })
        .then(templates => res.json(templates))
        .then((res) => {
            console.log(res)
        })
        .catch(err => console.log(err))
})


// router.route('/:id').get((req, res) => {
//     Exercise.findById(req.params.id)
//       .then(exercise => res.json(exercise))
//       .catch(err => res.status(400).json('Error: ' + err));
//   });



router.post('/add', upload.single('image'), (req, res) => {
    const template_name = req.body.template_name;
    const canvas_width = req.body.canvas_width;
    const canvas_height = req.body.canvas_height;
    const background_img_name = req.body.background_img_name;
    const background_img_path = req.body.background_img_path;
    const titles = req.body.titles;
    const titles_i = req.body.titles_i;
    // const title_align = req.body.title_align;
    // const title_size = req.body.title_size;
    // const title_width = req.body.title_width;
    // const title_height = req.body.title_height;
    // const title_color = req.body.title_color;
    // const title_type = req.body.title_type;
    // const title_position_x = req.body.title_position_x;
    // const title_position_y = req.body.title_position_y;
    const element_img = req.body.element_img;
    const element_position_x = req.body.element_position_x;
    const element_position_y = req.body.element_position_y;
    const element_width = req.body.element_width;
    const element_height = req.body.element_height;


    const newTemplate = new Template({
        template_name: template_name,
        canvas_width: canvas_width,
        canvas_height: canvas_height,
        background_img_name: background_img_name,
        background_img_path: background_img_path,
        titles: titles,
        titles_i: titles_i,
        element_img: element_img,
        element_position_x: element_position_x,
        element_position_y: element_position_y,
        element_width: element_width,
        element_height: element_height

        // title_align: title_align,
        // title_size: title_size,
        // title_width: title_width,
        // title_height: title_height,
        // title_color: title_color,
        // title_type: title_type,
        // title_position_x: title_position_x,
        // title_position_y: title_position_y,
    })


    //get the image name
    // var back_img_name = background_img.split("\\");
    // console.log(back_img_name[2])

    // const newTemplate = new Template({
    //     type: type,
    //     background_img: { data: fs.readFileSync(path.join(__dirname + '/uploads/' + back_img_name[2])), contentType: 'image/png' },
    //     title: title,
    //     title_size: title_size,
    //     title_color: title_color,
    //     title_type: title_type,
    //     title_position: title_position,
    //     element_img: { data: element_img, contentType: 'image/png' },
    //     element_position: element_position,
    //     element_size: element_size
    // })
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