const fs = require('fs');
// use mongodb with mongoose
const mongoose = require('mongoose');
const Post = require('../models/post.js');


const PostController = {};


// Create
PostController.createPost = (req,res,next)=>{ // Next를 안쓰면..
    const newPost = new Post({
        _id : new mongoose.Types.ObjectId(),
        title:req.body.title,
        content:req.body.content,
        aligned:req.body.aligned
    });

    if(req.file !== undefined){
        console.log(req.file);
        console.log(req.file.path);
        newPost.postImage.data = fs.readFileSync(req.file.path);
        newPost.postImage.contentType = 'image/png';
    }
    
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
        .sort({ '_id' : -1 }) // post 된 날짜대로 정렬 (timestamp desc)
        .exec()
        .then((docs)=>{
            const posts = docs;
            // console.log(posts[0].postImage=='{}')
            res.render('diary',{posts:posts});
        })
        .catch((err)=>{
            console.log(`Error occured ${err}`)
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
                console.log(post.postImage)
                res.locals.post = post;
                if(post.postImage.data !== undefined){
                    res.locals.postImage = post.postImage.data.toString('base64');
                }
                res.render('post');
            }
        })
        .catch(err=>{
            console.log(err)
        });
}

PostController.updatePost = (req,res)=>{
    const id = req.params.postId;
    const {title, content, aligned} = req.body;
    Post.findByIdAndUpdate(
        id,
        { 
            $set : {
                title : title, 
                content : content, 
                aligned : aligned,
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
    const id = req.params.postId
    Post.findOneAndDelete({ _id:id })
        .then(result=>{
            console.log(result);
            res.redirect('/diary');
        })
        .catch(err=>{
            console.log(err)
        });
}


module.exports = PostController;