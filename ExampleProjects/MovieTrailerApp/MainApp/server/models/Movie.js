var mongoose = require("mongoose");

// Creating movie schema
var MovieSchema = new mongoose.Schema({
  title:{
    type: String,
    required: true
  },
  url:{
    type: String,
    requird: true
  }
});

module.exports = MovieSchema;
