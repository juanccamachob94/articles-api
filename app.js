var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const routes = require('./routes/index');
const cors = require("cors");

var app = express();
app.use(cors());
// app.use(function(req, res, next) {
//   res.setHeader('Acces-Control-Allow-Origin', '*');
//   res.setHeader('Acces-Control-Allow-Headers', '*');
//   res.setHeader('Acces-Control-Allow-Methods', '*');
//   next();
// });


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
routes(app);

// error handler
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.json({ error: err.message});
});

module.exports = app;
