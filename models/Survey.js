var mongoose = require('mongoose');

var SurveySchema = new mongoose.Schema({
  username: String,
  bdate: String,
  email: String,
  suggestion: String,
  updated_date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Survey', SurveySchema);
