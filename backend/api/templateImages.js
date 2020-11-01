const express = require('express');
const router = express.Router()
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


const TemplateImage = require('../models/template-image');



// router.post('/uploadphoto', upload.single('picture'), (req, res) => {
//     var img = fs.readFileSync(req.file.path);
//     var encode_image = img.toString('base64');
//     // Define a JSONobject for the image attributes for saving to database

//     var finalImg = {
//         contentType: req.file.mimetype,
//         image: new Buffer(encode_image, 'base64')
//     };
//     finalImg.save()
//         .then(() => res.json({
//             message: "Created image successfully",
//         }))
//         .then((res) => {
//             console.log(res)
//         })
//         .catch(err => res.status(400).json({
//             "error": err,
//             "message": "Error creating account"
//         }))

// })



router.get('/', (req, res) => {
    TemplateImage.find()
        .then(images => res.json(images))
        .catch(err => console.log(err))
})
router.post('/add', (req, res) => {
    // const image = req.body.image;
    const name = req.body.name;

    const newImage = new TemplateImage({
        // image: image,
        name: name
    })
    newImage.save()
        .then(() => res.json({
            message: "Created image successfully",
            // image: req.body.image
        }))
        .then((res) => {
            console.log(res)
            fs.copyFile('C:/Users/User/Downloads/' + name + '.png', 'C:/Users/User/Documents/GitHub/Blox-shira/backend/api/uploads/' + name + '.png',
                (err) => { if (err) throw err; });

        })
        .then((res) => {
            // delete a file
            fs.unlink('C:/Users/User/Downloads/' + name + '.png', (err) => {
                if (err) {
                    throw err;
                }

                console.log("File is deleted.");
            });
        })
        .catch(err => res.status(400).json({
            "error": err,
            "message": "Error creating account"
        }))
})
module.exports = router 