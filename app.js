const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
const partials = require('express-partials');

const indexRouter = require('./routes/router');

// create server
const app = express();

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
