const mongoose = require('mongoose');

const { Schema } = mongoose;

const usersSchema = new Schema({
  id: Number,
  name: String,
  lastname: String,
  dateOfBirth: String,
  language: String,
  secondLanguage: String,
  email: String,
  password: String,
  image: String,
});

const Users = mongoose.model('Users', usersSchema);

module.exports = Users;
