const mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.Promise = global.Promise;
const validator = require('validator');
const mongodbErrorHandler = require('mongoose-mongodb-errors');

const userSchema = new Schema({
  userId: {
    type: String,
    required: 'There\'s been an issue authenticating using Github. Please try again later.',
    trim: true
  },
  email: {
    type: String,
    unique: true,
    lowercase: true,
    trim: true,
    // args are what are we validating and the error message
    validate: [validator.isEmail, 'Invalid Email Address']
  },
  username: {
    type: String,
    required: 'There\'s been an issue authenticating using Github. Please try again later.',
    trim: true
  },
  startDate: {
    type: Date,
    default: null
  },
  lastCommitId: {
    type: String,
    default: null
  }
});

userSchema.plugin(mongodbErrorHandler);

module.exports = mongoose.model('User', userSchema);