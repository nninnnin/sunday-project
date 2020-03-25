const mongoose = require('mongoose');
const Post = require('../models/post.js');

const PostController = {};




// Create
PostController.createPost = (req,res,next)=>{ // Next를 안쓰면..
    const newPost = new Post({
        _id : new mongoose.Types.ObjectId(),
        title:req.body.title,
        content:req.body.content
    });
    
    newPost.save()
        .then((result)=>{
            console.log(result);
        })
        .catch((err)=>{
            console.log(err);
        });

    res.redirect('/diary/write');
}

// Read
PostController.getPosts = (req,res)=>{
    Post.find()
        .sort({ $natural:-1 })
        .exec()
        .then((docs)=>{
            console.log(docs);
            const posts = docs;
            res.render('diary',{posts:posts});
        })
        .catch((err)=>{
            console.log(err)
        });
}
PostController.getPost = (req,res)=>{
    const postId = req.params.postId
    Post.findById({
        _id:postId
    })
        .then(post=>{
            const path = req.path;
            console.log(path);
            console.log(path.split('/')[1]);
            if( path.split('/')[1] === 'update'){
                res.locals.post = post;
                res.render('write');
            }
            else{
                res.locals.post = post;
                res.render('post');
            }
        })
        .catch(err=>{
            console.log(err)
        });
}
PostController.updatePost = (req,res)=>{
    const id = req.params.postId;
    const {title, content} = req.body;
    Post.findByIdAndUpdate(
        id,
        { 
            $set : {
                title : title, 
                content : content, 
                updated_At : new Date(),
                updated : true
            }
        },
        { new : true })
        .then(result=>{
            console.log(result);
            res.redirect(`/diary/${id}`);
        })
        .catch(err=>console.log(err));
}
PostController.deletePost = (req,res)=>{
    const id = req.body.postId
    Post.findByIdAndDelete({ id })
        .then(result=>{
            console.log(result)
        })
        .catch(err=>{
            console.log(err)
        });
}


module.exports = PostController;