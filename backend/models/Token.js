const mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.Promise = global.Promise;
const validator = require('validator');
const mongodbErrorHandler = require('mongoose-mongodb-errors');

const tokenSchema = new Schema({
  userId: {
    type: String,
    required: 'There\'s been an issue authenticating using Github. Please try again later.',
    trim: true
  },
  accessToken: {
    type: String,
    default: null
  }
});

tokenSchema.plugin(mongodbErrorHandler);

module.exports = mongoose.model('Token', tokenSchema);