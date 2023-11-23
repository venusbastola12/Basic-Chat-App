const mongoose = require("mongoose");
const Validator = require("validator");

const userSchema = new mongoose.Schema({
  name: {
    type: String,

    required: [true, "please provide your name"],
  },
  email: {
    type: String,
    unique: true,
    required: [true, "provide your emailaddress"],
    validate: [Validator.isEmail, "provide valid email"],
  },
  password: {
    type: String,
    required: [
      true,
      "you must provide a password for your account to be secured",
    ],
    min: 8,
    max: 25,
  },
  confirmPassword: {
    type: String,
    required: true,
    validate: {
      validator: function (value) {
        return value === this.password;
      },
      message: "password confirm should be same as ",
    },
    min: 8,
    max: 25,
  },
  passwordChangedAt: Date,
  resetPasswordToken: String,
  resetPasswordExpires: Date,
});

const User = mongoose.model("User", userSchema);
module.exports = User;
