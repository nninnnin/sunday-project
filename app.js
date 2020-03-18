const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
const partials = require('express-partials');
const mongoose = require('mongoose');

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

<<<<<<< HEAD
// import router
=======
// connect router
>>>>>>> 723d8fc7cb1562210ce2cfe2f3c2b3174a5915c4
const indexRouter = require('./routes/router');


// 비동기 + module 활용의 예시
// const timeout = require('./timeout.js');
// timeout.myTimeOut();


// Create server
const app = express();

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
// use router
app.use('/', indexRouter);

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

