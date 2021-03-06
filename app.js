const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const session = require('express-session')
const logger = require('morgan');

const indexRouter = require('./routes/index');
const prestadorRouter = require('./routes/prestador');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(session({ 
  secret: Math.random().toString(36).slice(-10),
  resave: true,
  saveUninitialized: true 
}));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/uploads/foto', express.static(path.join(__dirname, 'tmp', 'uploads', 'foto')));
// /uploads/perfil.png
// Navigator.geolocation.getCurrentPosition(success, failed)

app.use('/', indexRouter);
app.use('/prestador', prestadorRouter);
app.use(express.static('public'));

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
