const mongoose = require('mongoose');

// Define Schemes
const guestpostSchema = new mongoose.Schema(
    {
        _id: mongoose.Types.ObjectId,
        author:{
            type:String,
            default:'작성자'
        },
        content:{
            type:String,
            required:true
        },
        bg_color:{
            type:String,
            default:'#f0f8ff'
        },
        font_white:{
            type:Boolean,
            default:false
        },
        updated_At:{
            type:Date,
            default:Date.now
        },
        updated:{
            type:Boolean
        },
        hidden:{
            type:Boolean,
            default:false
        }
    },
    {   
        // options
        // timestamps:true,
    }
);


// Create Model & Export
module.exports = mongoose.model('Guestpost',guestpostSchema); // 세번째 인자로 collection 이름 지정 가능 (지정하지 않으면 첫번째 인자 + 's' 가 컬렉션 이름으로 지정됨)