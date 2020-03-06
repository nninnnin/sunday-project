const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
const partials = require('express-partials');

// create server
const app = express();

// express server setting with app.set() method
app.set('views',path.join(__dirname, 'views'));
app.set('view engine','ejs');

app.use(express.static('public'));
app.use(partials());

app.engine('html', require('ejs').renderFile);




// routings
app.get('/',(req,res)=>{
    res.render('index',{
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
});

app.get('/profile',(req,res)=>{
    res.render('profile.html');
});

app.get('/project',(req,res)=>{
    res.render('project.html');
});

app.get('/gallery',(req,res)=>{
    res.render('gallery.html');
});

app.get('/diary',(req,res)=>{
    res.render('diary',{posts:[
        {
            id:1,
            title:'Akira',
            content:'아키라는 2020년 네오도쿄를 배경으로 한다'
        },
        {
            id:2,
            title:'Flavors of Youth',
            content:'최근 나는 일본 문화를 다시 사랑하게 되었다. 그런 연유로 다시금 일본의 애니메이션을 보고싶다는 마음을 갖게 되었는데, 잔잔한 사랑의 아픔과 여운을 느낄 수 있는 좋은 영화였다고 생각한다.'
        },
        {
            id:3,
            title:'Miss little sunshine',
            content:'미스 리틀 선샤인, 잔잔하고 따듯한 영화.'
        }
    ]});
});

app.get('/diary/post',function(req,res){
    res.render('post', {
        profile:{
            name:'justindglee',
            age:35
        }
    });
});

app.get('/visitor',(req,res)=>{
    res.render('visitor.html')
});



app.listen(8000, function(){
    console.log("express server heard on 8000");
    console.log("let's go to http://localhost:8000");
});
