const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');

const app = express();

// express server setting with app.set() method
app.set('views',path.join(__dirname, 'public/views'));
app.set('view engine','ejs');

app.get('/',function(req,res){
    // res.send('index');
    res.render('post', {
        profile:{
            name:'justindglee',
            age:29
        }
    });
});

app.listen(8000, function(){
    console.log("heard on 8000");
});