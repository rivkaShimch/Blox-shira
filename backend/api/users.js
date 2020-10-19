const express = require('express');
const router = express.Router()
const User = require('../models/User');
router.get('/', (req, res) => {
    User.find()
        .then(users => res.json(users))
        .catch(err => console.log(err))
})
router.post('/add', (req, res) => {
    const u_name = req.body.username;
    const u_email = req.body.email;

    const newUser = new User({
        username: u_name, email: u_email
    })
    newUser.save()
        .then(() => res.json({
            message: "Created account successfully"
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