const createError = require('http-errors');
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const server = express();
const router = express.Router();

server.use(bodyParser.json());
server.use(express.static(path.join(__dirname, 'public')));
// server.set('view engine', 'ejs');

// API Service
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/testExpress')
  .then(() => console.log('connection succesful'))
  .catch(err => console.error(err));

const Users = require('./models/UsersModel');
const Activities = require('./models/ActivitiesModel');

// create api route
server.use('/api/users', router);
server.use('/api/activities', router);

server.post('/api/activities', (req, res) => {
  const activity = new Activities();
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

  activity.save((err) => {
    if (err) {
      res.send(err);
    }
    res.json();
  });
});

server.get('/api/activities', (req, res) => {
  Activities.find((err, activities) => {
    if (err) {
      res.send(err);
    }
    res.json(activities);
  });
});

server.post('/api/users', (req, res) => {
  const user = new Users();
  user.id = req.body.user.id;
  user.name = req.body.user.name;
  user.lastname = req.body.user.lastname;
  user.dateOfBirth = req.body.user.dateOfBirth;
  user.language = req.body.user.language;
  user.secondLanguage = req.body.user.secondLanguage;
  user.email = req.body.user.email;
  user.password = req.body.user.password;
  user.categories = req.body.user.categories;
  user.image = req.body.user.image;

  user.save((err) => {
    if (err) {
      res.send(err);
    }
    res.json({ message: 'User created. Check Robo 3T!' });
  });
});

server.get('/api/users', (req, res) => {
  Users.find((err, activities) => {
    if (err) {
      res.send(err);
    }
    res.json(activities);
  });
});

server.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

// catch 404 and forward to error handler
server.use((req, res, next) => {
  next(createError(404));
});

// error handler
server.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = server;
