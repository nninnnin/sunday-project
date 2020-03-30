const mongoose = require('mongoose');

// Define Schemes
const postSchema = new mongoose.Schema(
    {
        _id:mongoose.Types.ObjectId,
        title:{
            type:String,
            required:true
        },
        content:{
            type:String,
            required:true
        },
        aligned:{
            type:String
        },
        postImage:{
            data:Buffer,
            contentType:String
        },
        updated_At:{
            type:Date
        },
        updated:{
            type:Boolean
        }
    }
);

// Create Model & Export
module.exports = mongoose.model('Post',postSchema);