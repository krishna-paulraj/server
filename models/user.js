const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  first_name: {
    type: String,
    require: true,
  },
  last_name: {
    type: String,
    require: false,
  },
  email: {
    type: String,
    require: true,
    unique: true,
  },
  job_title: {
    type: String,
  },
});

const User = mongoose.model("user", userSchema); // New Model

module.exports = User;
