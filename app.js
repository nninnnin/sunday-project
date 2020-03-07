const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
const partials = require('express-partials');

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

// connect router
const indexRouter = require('./routes/router');

// create server
const app = express();

app.use(connectLivereload());

// express server setting with app.set() method
app.set('views',path.join(__dirname, 'views'));
app.set('view engine','ejs');

app.use(express.static('public'));
app.use(partials());

app.engine('html', require('ejs').renderFile);

app.use('/', indexRouter);

app.listen(8000, function(){
    console.log("express server heard on 8000");
    console.log("let's go to http://localhost:8000");
});
