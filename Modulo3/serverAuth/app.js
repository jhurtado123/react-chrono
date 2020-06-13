require('dotenv').config();

const session = require('express-session');
var createError = require('http-errors');
var express = require('express');
const MongoStore = require("connect-mongo")(session);
var cors = require('cors')

var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();
app.use(
  cors({
    credentials: true,
    origin: ['http://localhost:3000'],
  })
);

const mongoose = require('mongoose');



mongoose

  .connect(process.env.MONGODB_URI, {useNewUrlParser: true})
  .then(x => console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`))
  .catch(err => console.log(err));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser('secret'));

app.use(session({cookie: {maxAge: new Date(Date.now() + (60 * 1000 * 30))}}));
app.use(logger('dev'));

app.use(session({
  secret: "ss-app-secret",
  cookie: {maxAge: new Date(Date.now() + (60 * 1000 * 30))}, // 60 seconds
  store: new MongoStore({
    mongooseConnection: mongoose.connection,
    resave: true,
    saveUninitialized: false,
    ttl: 24 * 60 * 60 // 1 day
  })
}));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/users', usersRouter);

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
