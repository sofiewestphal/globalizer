const mongoose = require('mongoose');

const { Schema } = mongoose;

const activitiesSchema = new Schema({
  id: String,
  category: String,
  date: String,
  title: String,
  location: String,
  startTime: String,
  endTime: String,
  description: String,
  owner: Number,
  attendees: Array,
  maxNumberOfAttendees: Number,
});

const Activities = mongoose.model('Activities', activitiesSchema);

module.exports = Activities;
