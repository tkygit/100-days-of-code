const mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.Promise = global.Promise;
const validator = require('validator');
const mongodbErrorHandler = require('mongoose-mongodb-errors');

const commitSchema = new Schema({
  commitId: {
    type: String,
    required: 'There\'s been an issue communicating with Github. Please try again later.',
    trim: true
  },
  userId: {
    type: String,
    required: 'There\'s been an issue communicating with Github. Please try again later.',
    trim: true
  },
  commitDate: {
    type: Date,
    required: 'There\'s been an issue communicating with Github. Please try again later.',
    default: null
  },
  repoName: {
    type: String,
    default: ""
  },
  repoUrl: {
    type: String,
    default: "",
    validate: (value) => validator.isURL(value, { protocols: ['http','https'], require_protocol: true })
  },
  commitMessage: {
    type: String,
    default: ""
  },
  commitUrl: {
    type: String,
    default: "",
    validate: (value) => validator.isURL(value, { protocols: ['http','https'], require_protocol: true })
  }
});

commitSchema.plugin(mongodbErrorHandler);

module.exports = mongoose.model('Commit', commitSchema);