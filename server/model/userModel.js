const mongoose = require("mongoose");
const Validator = require("validator");
const bcrypt = require("bcryptjs");

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
      message: "password confirm should be same as above given password ",
    },
    min: 8,
    max: 25,
  },
  passwordChangedAt: Date,
  resetPasswordToken: String,
  resetPasswordExpires: Date,
});

//middlewares..
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 12);
  this.confirmPassword = undefined;
});
userSchema.methods.checkPassword = async function (
  givenPassword,
  userPassword
) {
  return await bcrypt.compare(givenPassword, userPassword);
};
const User = mongoose.model("User", userSchema);
module.exports = User;
