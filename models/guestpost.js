const mongoose = require('mongoose');

// Define Schemes
const guestpostSchema = new mongoose.Schema(
    {
        _id: mongoose.Types.ObjectId,
        content:{
            type:String,
            required:true
        },
        published:{
            type:Date,
            default:Date.now
        }
    },
    {   
        // options
        // timestamps:true,
    }
);


// Create Model & Export
module.exports = mongoose.model('Guestpost',guestpostSchema); // 세번째 인자로 collection 이름 지정 가능 (지정하지 않으면 첫번째 인자 + 's' 가 컬렉션 이름으로 지정됨)