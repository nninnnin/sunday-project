const mongoose = require('mongoose');

// Define Schemes
const postSchema = new mongoose.Schema(
    {
        postId:{
            type: Number,
            required:true,
            unique:true
        },
        content:{
            type:String,
            required:true
        },
        completed:{
            type:String,
            default:false
        }
    },
    {
        timestamps:true    
    }
);

// Create Model & Export
module.exports = mongoose.model('Post',postSchema); // Post 라는 colletion 에 위에 작성한 postSchema를 연결한다