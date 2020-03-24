const express = require('express');
const posts = require('../public/data/diary.json');
const router = express.Router();

// home
router.get('/',(req,res)=>{
    res.render('index',{
        imgs:[
            {
                id:1,
            },
            {
                id:2,
            },
            {
                id:3,
            }
        ]
    });
});

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

// diary
router.get('/diary',(req,res)=>{
    res.render('diary',{posts:posts});
});

router.get('/diary/write',(req,res)=>{
    res.render('write');
});

router.get('/diary/:postId',(req,res)=>{
    const postId = req.params.postId
    res.locals.post = posts[postId-1];
    res.render('post');
});



module.exports = router;