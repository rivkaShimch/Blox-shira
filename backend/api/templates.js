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
    const background_color = req.body.background_color;
    const titles = req.body.titles;
    const titles_i = req.body.titles_i;
    const element_img = req.body.element_img;
    const element_img_i = req.body.element_img_i;


    const newTemplate = new Template({
        template_name: template_name,
        canvas_width: canvas_width,
        canvas_height: canvas_height,
        background_color: background_color,
        titles: titles,
        titles_i: titles_i,
        element_img: element_img,
        element_img_i: element_img_i,
    })

    newTemplate.save()
        .then(() =>
            res.json({
                message: "Created Template successfully",
                name: template_name
            })

        )
        .then((res) => {
            fs.copyFile('C:/Users/User/Downloads/' + template_name + '.png', 'C:/Users/User/Documents/GitHub/Blox-shira/backend/api/uploads/' + template_name + '.png',
                (err) => { if (err) throw err; });

            console.log(res)

            // delete a file
            fs.unlink('C:/Users/User/Downloads/' + template_name + '.png', (err) => {
                if (err) {
                    throw err;
                }

                console.log("File is deleted.");
            });
        })
        .catch(err => res.status(400).json({
            "error": err,
            "message": "Error creating template"
        }))
})

module.exports = router 