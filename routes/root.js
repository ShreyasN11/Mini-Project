const express = require('express');
const router = express.Router();
const path = require('path');
const findpatient = require('../controllers/post');


router.get('^/$|/index(.html)?', (req,res) =>{
    res.sendFile(path.join(__dirname,'..' ,'views', 'index.html'));
});

router.get('/patient(.html)?', (req,res) =>{
    res.sendFile(path.join(__dirname, '..','views','patient.html'));
});

router.post('/searchPatient', findpatient);

module.exports = router;