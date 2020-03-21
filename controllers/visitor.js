// VISITOR CONTROLLER

const mongoose = require('mongoose');
const Guestpost = require('../models/guestpost');

const visitorController = {};

visitorController.createPost = (req,res,next)=>{
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
};

visitorController.readPost = (req,res)=>{
    Guestpost.find()
        .exec() // mongoose 4버전부터는 생략 가능 (출처 zerocho)
        .then(docs=>{
            console.log(docs);
            const guestPosts = docs;
            res.render('visitor',{
                guestPosts:guestPosts
            })
        })
        .catch(err=>{
            console.log(err)
        });
};

visitorController.deletePost = (req,res,next)=>{
    const id = req.params.postId;
    console.log(id)
    Guestpost.remove({ _id: id })
        .then((docs)=>{
            if(docs){
                console.log(docs)
            }
        })
        .catch(err=>{
            console.log(err);
        });

    res.redirect('/visitor')
};

module.exports = visitorController;