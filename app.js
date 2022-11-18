const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const multer = require('multer');
const cookieParser = require('cookie-parser');
const checkUser = require('./middleware/checkUser');
const port = process.env.PORT || 3000;
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var logger = require('morgan');
var fs = require('fs');
var bodyParser = require('body-parser');
require('dotenv/config');

var indexRouter = require('./routes/index');
var recipeRouter = require('./routes/recipe');
var AuthRouter = require('./routes/auth');

var app = express();

const mongoDB = "mongodb://127.0.0.1:27017/recipy";
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', function () {
  console.log("Connected to MongoDB");
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/uploads', express.static('uploads'));
app.use(cookieParser());
app.use('*', checkUser);

app.use('/', indexRouter);
app.use('/recipes', recipeRouter);
app.use('/user', AuthRouter);




// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});


// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;




app.listen(port, () => console.log(`listening on port ${port}`))



