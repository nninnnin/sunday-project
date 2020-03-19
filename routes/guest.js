const express = require('express');
const router = express.Router();
const Guest = require('../models/guest');

// Create guest
router.post('/',(req,res)=>{
    Guest.create(req.body)
        .then(guest => res.send(guest))
        .catch(err => res.status(500).send(err));
});

// Read guest
router.get('/',(req,res)=>{
    res.render('visitor')
});

// Update guest

// Delete guest

module.exports = router;