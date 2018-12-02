var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// app.use('/', indexRouter);
// app.use('/users', usersRouter);

// API Service
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/testExpress')
  .then(() => console.log('connection succesful'))
  .catch((err) => console.error(err));

var Activities = require('./models/ActivitiesModel');
var Users = require('./models/UsersModel');

var router = express.Router();

// create api route
app.use('/api/activities', router);

app.post('/api/activities', function (req, res) {
  var activity = new Activities();
  activity.id = req.body.activity.id;
  activity.category = req.body.activity.category;
  activity.date = req.body.activity.date;
  activity.title = req.body.activity.title;
  activity.location = req.body.activity.location;
  activity.startTime = req.body.activity.startTime;
  activity.endTime = req.body.activity.endTime;
  activity.description = req.body.activity.description;
  activity.owner = req.body.activity.owner;
  activity.attendees = req.body.activity.attendees;
  activity.maxNumberOfAttendees = req.body.activity.maxNumberOfAttendees;

  activity.save(function (err) {
    if (err) {
      res.send(err);
    }
    res.json({ message: 'Activity created. Check Robo 3T!' });
  });
});

app.get('/api/activities', function (req, res) {
  Activities.find(function (err, activities) {
    if (err) {
      res.send(err);
    }
    res.json(activities);
  });
});

app.post('/api/users', function (req, res) {
  var user = new Users();
  user.id = req.body.user.id;
  user.name = req.body.user.name;
  user.lastname = req.body.user.lastname;
  user.dateOfBirth = req.body.user.dateOfBirth;
  user.language = req.body.user.language;
  user.secondLanguage = req.body.user.secondLanguage;
  user.email = req.body.user.email;
  user.password = req.body.user.password;
  user.image = req.body.user.image;

  user.save(function (err) {
    if (err) {
      res.send(err);
    }
    res.json({ message: 'User created. Check Robo 3T!' });
  });
});

app.get('/api/users', function (req, res) {
  Users.find(function (err, activities) {
    if (err) {
      res.send(err);
    }
    res.json(activities);
  });
});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
