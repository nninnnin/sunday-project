const express = require('express');
const router = express.Router();
const indexController = require('../controllers/index')

// home
router.get('/', indexController.getPosts);

// profile
router.get('/profile',(req,res)=>{
    res.render('profile.ejs');
});

// project
router.get('/project',(req,res)=>{
    res.render('project.ejs');
});

// gallery
router.get('/gallery',(req,res)=>{
    res.render('gallery.ejs');
});

module.exports = router;