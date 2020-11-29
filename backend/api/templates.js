const express = require('express');
const router = express.Router()
const Template = require('../models/Template');
var fs = require('fs');
var multer = require('multer');
var request = require('request');

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


router.post(('/uploadImage/:uId'), async (req, res) => {
    console.log("&&&&&&&&&&&&&&&&&&&&")
    console.log("wwwwwwwwwwwwwwwwwwww", req.files)
    if (!req.files) {
        let url = 'https://files.leader.codes/uploads/uLKS7DPkWsdywmn1LaRv1gI3RYL2/img/1606297106751__banner_ad.jpg'
        res.send(url)
        return
    }
    console.log(req.params.uId)
    console.log(req.files.file)
    let url = await uploadedFile(req.files.file, req.params.uId, req.headers["authorization"]);
    // let url = 'https://files.leader.codes/uploads/undefined/img/1605085195090__profil.png'
    console.log(url);
    res.send(url);
})


uploadedFile = (fileToUpload, uId, headers) => {
    console.log("headers", headers);
    return new Promise(async (resolve, reject) => {
        console.log(fileToUpload);
        console.log("uploadedFile");
        const uri = `https://files.leader.codes/api/${uId}/upload`;
        console.log(uri);
        const options = {
            method: "POST",
            url: uri,
            headers: {
                Authorization: headers,
                "Content-Type": "multipart/form-data",
            },
            formData: {
                file: {
                    value: fileToUpload.data,
                    options: {
                        filename: fileToUpload.name,
                    },
                },
            },
        };

        request(options, async (err, res, body) => {
            if (err) {
                console.log(err);
                reject(err);
            }
            let url;
            console.log("result from server", body);
            try {
                url = JSON.parse(body).data.url;
                // let url=body.data.url;
                resolve(url);
            } catch (error) {
                reject(error);
            }
        });
    });
};


router.post('/add', upload.single('image'), (req, res) => {
    const template_name = req.body.template_name;
    const canvas_width = req.body.canvas_width;
    const canvas_height = req.body.canvas_height;
    const background_color = req.body.background_color;
    const titles = req.body.titles;
    const titles_i = req.body.titles_i;
    // const shapes = req.body.shapes;
    // const shapes_i = req.body.shapes_i;
    const element_img = req.body.element_img;
    const element_img_i = req.body.element_img_i;


    const newTemplate = new Template({
        template_name: template_name,
        canvas_width: canvas_width,
        canvas_height: canvas_height,
        background_color: background_color,
        titles: titles,
        titles_i: titles_i,
        // shapes: shapes,
        // shapes_i: shapes_i,
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