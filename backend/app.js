const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

app.use(bodyParser.json());

// CORS

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type,Authorization"
  );
  next();
});

// Database connection

const mongoose = require('mongoose');

mongoose.connect('mongodb://common:bs9cbM9Npty8F9B@ds237858.mlab.com:37858/globalizer')
  .then(() => console.log('connection succesful'))
  .catch(err => console.error(err));

// mongoose.connect('mongodb://localhost/testExpress')
//   .then(() => console.log('connection succesful'))
//   .catch(err => console.error(err));

const Users = require('./models/UsersModel');
const Activities = require('./models/ActivitiesModel');

// API Service

// app.use('/api/users', router);
// app.use('/api/activities', router);

app.post('/api/activities', (req, res) => {
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

app.get('/api/activities', (req, res) => {
  Activities.find((err, activities) => {
    if (err) {
      res.send(err);
    }
    res.json(activities);
  });
});

app.post('/api/activities/update', (req, res) => {
  const query = {
    title: req.body.query.activity.title,
    owner: req.body.query.activity.owner,
    location: req.body.query.activity.location,
    description: req.body.query.activity.description,
    date: req.body.query.activity.date,
    startTime: req.body.query.activity.startTime,
    endTime: req.body.query.activity.endTime,
    maxNumberOfAttendees: req.body.query.activity.maxNumberOfAttendees
  };
  const newAttendees = req.body.attendees;

  Activities.findOneAndUpdate(query, newAttendees)
    .then(doc => {
      console.log(doc)
    })
    .catch(err => {
      console.error(err)
    })
});

app.post('/api/users', (req, res) => {
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

app.get('/api/users', (req, res) => {
  Users.find((err, activities) => {
    if (err) {
      res.send(err);
    }
    res.json(activities);
  });
});

app.use(express.static(path.join(__dirname, '/public')));

module.exports = app;
