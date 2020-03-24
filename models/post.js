const mongoose = require('mongoose');

// Define Schemes
const postSchema = new mongoose.Schema(
    {
        postId:mongoose.Types.ObjectId,
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
module.exports = mongoose.model('Post',postSchema);