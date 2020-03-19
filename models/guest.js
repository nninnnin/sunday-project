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
        timestamps:true,
    }
);

postSchema.statics.create = (payload)=>{ // payload란 내용물
    // this === Model
    // 여기에서 this는 postSchema를 의미하고, 따라서 payload를 
    console.log(this);
    const todo = new this(payload);
    // return Promise
    return todo.save();
}

postSchema.statics.findAll = ()=>{
    return this.find({})
}

postSchema.statics.findOneByPostId = (postId)=>{
    return this.findOne({ postId });
}

postSchema.statics.updateByPostId = (postId, payload)=>{
    return this.findOneAndUpdate({ postId }, payload, {new: true});
}

// Create Model & Export
module.exports = mongoose.model('Post',postSchema); // 세번째 인자로 collection 이름 지정 가능 (지정하지 않으면 첫번째 인자 + 's' 가 컬렉션 이름으로 지정됨)