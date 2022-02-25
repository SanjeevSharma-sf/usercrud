const mongoose = require("mongoose");
const validator = require("validator");
const userDetailSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please Enter the name"],

  },
  email: {
    type: String,
    required: [true, "Please Enter Your Email"],
    unique: true,
    validate: [validator.isEmail, "Please Enter a valid Email"],
  },
  gender: {
    type: String,
    required: [true, "Please Select your Gender"],
  },
  status: {
    type: String,
    required: [true, "Please Select your Status"],
  },
});

module.exports = mongoose.model("Userdetail", userDetailSchema);
