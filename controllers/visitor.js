// VISITOR CONTROLLER
const mongoose = require('mongoose');
const Guestpost = require('../models/guestpost');
// Make Mongoose use `findOneAndUpdate()`. Note that this option is `true`
// by default, you need to set it to false.
mongoose.set('useFindAndModify', false);

const visitorController = {};

visitorController.createPost = (req,res,next)=>{
    let bg_color = null;
    let font_white = null;
    // color input parsing to change from hex to rgb format
    if(req.body.bg_color){
        const colorHex = req.body.bg_color.match(/[A-Za-z0-9]{2}/g);
        const colorDec = colorHex.map((val)=>{return parseInt(val,16)})
        bg_color = `rgb(${colorDec.join(',')})`;

        const r= colorDec[0];
        const g= colorDec[1];
        const b= colorDec[2];

        const lum = r*0.2126+g*0.7152 + b*0.0722;
        // rgb로 계산한 lum이 129 미만이라면 font color를 white로
        if(lum<129){
            font_white = true;
        }
    }

    let NewGuestPost = new Guestpost({
        _id: new mongoose.Types.ObjectId(),
        content: req.body.content,
        bg_color:bg_color,
        font_white:font_white,
        hidden: req.body.hidden
    });

    NewGuestPost.save()
        .then(result=>console.log(result))
        .catch(err=>console.log(err));

    res.redirect('/visitor');
};

visitorController.readPost = (req,res)=>{
    Guestpost.find()
        .sort({_id:-1})
        .exec() // mongoose 4버전부터는 생략 가능 (출처 zerocho)
        .then(docs=>{
            // console.log(docs);
            const guestPosts = docs;
            res.render('visitor',{
                guestPosts:guestPosts,
                node_env:process.env.NODE_ENV
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
            { $set : { content: content , updated_At:new Date(), updated:true} },
            { new : true }
        )
        .then((result)=>{
            if(result) {
                console.log(result);
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