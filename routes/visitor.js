const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Guestpost = require('../models/guestpost');

// Create guestpost
router.post('/',(req,res,next)=>{
    console.log(req.body.content);

    let NewGuestPost = new Guestpost({
        _id: new mongoose.Types.ObjectId(),
        content: req.body.content,
        published: new Date()
    });

    NewGuestPost.save()
        .then(result=>console.log(result))
        .catch(err=>console.log(err));

    res.redirect('/visitor');
});

// Read guestpost
router.get('/',(req,res)=>{
    // Guestpost 모델에 쿼리날리기
    Guestpost.find()
        .exec()
        .then(docs=>{
            console.log(docs);
            // 가져온 데이터 변수에 담아서 렌더링
            const guestPosts = docs;
            res.render('visitor',{
                guestPosts:guestPosts
            })
        })
        .catch(err=>{
            console.log(err)
        });
});

// Update guestpost

// Delete guestpost

module.exports = router;