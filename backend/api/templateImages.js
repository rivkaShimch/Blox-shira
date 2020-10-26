const express = require('express');
const router = express.Router()
const TemplateImage = require('../models/template-image');

router.get('/', (req, res) => {
    TemplateImage.find()
        .then(images => res.json(images))
        .catch(err => console.log(err))
})
router.post('/add', (req, res) => {
    const image = req.body.image;
    const name = req.body.name;

    const newImage = new TemplateImage({
        image: image, name: name
    })
    newImage.save()
        .then(() => res.json({
            message: "Created image successfully",
            alert: ("Created template successfully")
        }))
        .then((res) => {
            console.log(res)
        })
        .catch(err => res.status(400).json({
            "error": err,
            "message": "Error creating account"
        }))
})
module.exports = router 