// VISITOR CONTROLLER

const mongoose = require('mongoose');
const Guestpost = require('../models/guestpost');
// Make Mongoose use `findOneAndUpdate()`. Note that this option is `true`
// by default, you need to set it to false.
mongoose.set('useFindAndModify', false);

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

visitorController.updatePost = (req,res,next)=>{
    // const content = req.body.content;
    const id = req.params.postId;
    Guestpost.findOneAndUpdate(
        { _id : id }, // filter
        { $set : { content: '업데트' } } //update
    )   
    .then(result=>{
        console.log(result);
        // update 결과를 다시 클라이언트로 보내주자 
        res.send(result);
    }) 
    .catch(err=>console.log(err));
};

visitorController.deletePost = (req,res,next)=>{
    const id = req.params.postId;
    console.log(id)
    Guestpost.deleteOne({ _id: id })
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