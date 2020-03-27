// ENV
require('dotenv').config();

// DEPENDENCIES
const express = require('express');
const path = require('path');
const partials = require('express-partials');
const mongoose = require('mongoose');
const methodOverride = require('method-override');


// import routers
const indexRouter = require('./routes/index');
const diaryRouter = require('./routes/diary');
const visitorRouter = require('./routes/visitor');

// setting live-reload to refresh browser rendering when frontend code is changed
const livereload = require('livereload');
const connectLivereload = require('connect-livereload');

const livereloadServer = livereload.createServer();
livereloadServer.watch(['public', path.join(__dirname,'views')]);
livereloadServer.server.once("connection",()=>{
    setTimeout(()=>{
        livereloadServer.refresh("/");
    },50);
});


// Create server
const app = express();

app.use(methodOverride('_method'));

// Connect server with  live reload
app.use(connectLivereload());

// Static File Service 
app.use(express.static('public'));

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
mongoose.connect('mongodb://localhost:27017/test',{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
.then(()=> console.log('Successfully connected to mongodb'))
.catch((e)=> console.log(e));


app.listen(8000, function(){
    console.log("express server heard on 8000");
    console.log("let's go to http://localhost:8000");
});


// original nodejs bulit-in module을 활용한 http 서버
const http = require('http');
http.createServer((req,res)=>{
    res.write('Hello World');
    res.end();
}).listen(8080,()=>{
    console.log('server is turned on with nodejs in port 8080')
})


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
