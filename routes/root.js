const express = require('express');
const router = express.Router();
const path = require('path');
const {findpatient,checkrole} = require('../controllers/post');
const verifyToken = require('../middleware/verifyToken');


router.get('^/$|/index(.html)?', (req,res) =>{
    res.sendFile(path.join(__dirname,'..' ,'views', 'index.html'));
});

router.get('/patient', verifyToken, (req, res) => { 
    res.sendFile(path.join(__dirname, '..' ,'views', 'patient.html'));
}); 

router.get('/validateIdToken', verifyToken, (req, res) => {
    res.status(200).send('Valid ID token');
});

router.get('/user', verifyToken, (req, res) => {
    res.sendFile(path.join(__dirname, '..' ,'views', 'user.html'));
}); 

router.post('/searchPatient',  findpatient);

router.post('/searchRole', checkrole);

module.exports = router;