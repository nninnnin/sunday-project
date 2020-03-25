mongoose = require('mongoose');
const Post = require('../models/post');

const indexController = {};

indexController.getPosts = (req,res,next) => {
    Post.find()
        .sort({ $natural : -1})
        .limit(4)
        .exec()
        .then(result=>{
            console.log(result);
            const posts = result;
            res.render('index',{
                posts:posts,
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
        })
        .catch(err=>{
            console.log(err)
        });
};


module.exports = indexController;