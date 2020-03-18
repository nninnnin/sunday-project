const express = require('express');
const router = express.Router();

const posts = require('../public/data/diary.json');


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
    res.render('profile.html');
});
// project
router.get('/project',(req,res)=>{
    res.render('project.html');
});
// gallery
router.get('/gallery',(req,res)=>{
    res.render('gallery.html');
});
// diary
router.get('/diary',(req,res)=>{
    res.render('diary',{posts:posts});
});
// diary post
router.get('/diary/:postId',(req,res)=>{
    const postId = req.params.postId
    res.locals.post = posts[postId-1];
    res.render('post');
});
//visitor
router.get('/visitor',(req,res)=>{
    res.render('visitor.html')
});


module.exports = router;