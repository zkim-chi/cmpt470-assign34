var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var addRectangleRouter = require('./routes/add-rectangle'); // add new rectangle
var viewRectanglesRouter = require("./routes/view-rectangles"); // display rectangles
var getRectanglesRouter = require("./routes/get-rectangle"); // get rectanlges
var editRectangleRouter = require("./routes/edit-rectangle"); // edit rectangles
var updateRectangleRouter = require("./routes/update-rectangle"); // update rectangles
var deleteRectangleRouter = require("./routes/delete-rectangle"); // update rectangles

var app = express();

const pg = require("pg");

const pool = new pg.Pool({
  user: "postgres",
  host: "127.0.0.1",
  database: "rectangles",
  password: "123",
  port: "5432",
});

exports.pool = pool;

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/add-rectangle', addRectangleRouter);
app.use('/view-rectangles', viewRectanglesRouter);
app.use('/get-rectangle', getRectanglesRouter);
app.use('/edit-rectangle', editRectangleRouter);
app.use('/update-rectangle', updateRectangleRouter);
app.use('/delete-rectangle', deleteRectangleRouter);

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
