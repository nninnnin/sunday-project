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
        .sort({$natural:-1})
        .exec() // mongoose 4버전부터는 생략 가능 (출처 zerocho)
        .then(docs=>{
            // console.log(docs);
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
    console.log(req.body);
    console.log(req.body.content);
    const id = req.params.postId;
    const content = req.body.content;

    if(mongoose.Types.ObjectId.isValid(id)){ // id 유효성 검사
        const id = req.params.postId;

        Guestpost.findByIdAndUpdate(
            id,
            { $set : { content: content } },
            { new : true }
        )
        .then((result)=>{
            if(result) {
                console.log(result)
                res.send(result);
            } else {
                console.log('그런 유저는 없어요!');
            }
        })
        .catch((err)=>{
            console.log(err)
        })
    } else {
        console.log('적절치 않은 id 형식입니다');
    }
}

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