var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var TaskSchema = new Schema({
  message: {
    type: String,
  }
});

module.exports = mongoose.model('Tasks', TaskSchema);