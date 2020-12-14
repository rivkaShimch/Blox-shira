const express = require('express');
const router = express.Router();

const { getTemplates,
    findTemplateByName,
    uploadImageForUser,
    addTemplate } = require('../controller/templates')
import firebaseController from '../controller/firebase'

router.get('/', getTemplates);
router.get('/find', findTemplateByName);
router.post('/uploadImage/:uId', uploadImageForUser);
router.post('/add', addTemplate);

router.post('/getAccessToken', firebaseController.getToken);
router.post('/checkPremission/:username', firebaseController.checkPremission);
router.post('/usernameCheck', firebaseController.usernameCheck);

module.exports = router;