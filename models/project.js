const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema(
    {
        _id: mongoose.Types.ObjectId,
        title:{
            type:String,
            required:true
        },
        desc:{
            type:String,
            required:true
        },
        tags:{
            type:String,
            required:true
        }
    }
)