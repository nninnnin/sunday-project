// ENV
require('dotenv').config();
let node_env = process.env.NODE_ENV;
console.log('node_env is :',node_env);
node_env = (node_env && node_env.trim().toLowerCase() === 'development')? 'development' : 'production';
// node_env를 (실행 시) 따로 development 으로 지정해주지 않으면 production 모드로 작동
console.log('node_env is :',node_env);

// DEPENDENCIES
const express = require('express');
const path = require('path');
const partials = require('express-partials');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const favicon = require('serve-favicon');

let livereload = null;
let connectLivereload = null;

if(node_env==="development"){
    livereload = require('livereload');
    connectLivereload = require('connect-livereload');
}


// import routers
const indexRouter = require('./routes/index');
const diaryRouter = require('./routes/diary');
const visitorRouter = require('./routes/visitor');


// Create server
const app = express();


app.use(methodOverride('_method'));

// Static File Service 
app.use(express.static('public'));

// serve favicon
app.use(favicon(path.join(__dirname,'public','favicon.ico')))


// dev mode setting
if (node_env === 'development'){
    // setting live-reload to refresh browser rendering when frontend code is changed
    const livereloadServer = livereload.createServer();
    livereloadServer.watch(['public', path.join(__dirname,'views')]);
    livereloadServer.server.once("connection",()=>{
        setTimeout(()=>{
            livereloadServer.refresh("/");
        },50);
    });
    // Connect server with  live reload
    app.use(connectLivereload());
}


// express server setting with app.set() method
app.set('views',path.join(__dirname, 'views'));
app.set('view engine','ejs');

// use partials with ejs
app.use(partials());
// ejs can rendering HTML file
app.engine('html', require('ejs').renderFile);

// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }));
// parse application/json
app.use(express.json());


// use router
app.use('/', indexRouter);
app.use('/diary', diaryRouter);
app.use('/visitor', visitorRouter);


// Nodejs의 native Promise 사용 (mongoose의 mPromise가 deprecated)
mongoose.Promise = global.Promise;

// Connect to MongoDB server
// mongoose.connect('mongodb://localhost:27017/test',{
//     useNewUrlParser:true,
//     useUnifiedTopology:true
// })
mongoose.connect(process.env.MONGODB_URI,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
.then(()=> console.log('Successfully connected to mongodb'))
.catch((e)=> console.log(e));

const port = process.env.PORT;

if(port == null || port ==""){
    port=8000;
}

app.listen(port, function(){
    console.log("express server heard on 8000");
    console.log("let's go to http://localhost:8000");
});


// test built in modules

// 1. assert - test expressions

// const assert = require('assert');
// assert(5>7)
// assert.deepEqual(5,2)


// 2. buffer - handling streams of binary data
// global object라서 require로 import 하지 않아도 쓸 수 있다.

// let buf = Buffer.from('abc');
// buf = Buffer.alloc(10);
// console.log(buf)
