const mongoose = require("mongoose");
const User = require("../model/userModel");
const jwt = require("jsonwebtoken");
const ApiError = require("../utils/apiError");
const catchAsync = require("../utils/catchAsync");

exports.signup = catchAsync(async (req, res, next) => {
  //console.log(req.body);
  // res.status(200).json({
  //   status: "success",
  //   message: "no signup mechanism implemented",
  // });

  const newUser = await User.create(req.body);
  console.log(newUser);
  const token = jwt.sign({ id: newUser._id }, process.env.SECRET_KEY, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
  res.status(200).json({
    status: "success",
    token,
    data: {
      newUser,
    },
  });
  //  catch (err) {
  //   console.log(err);
  //   res.status(400).json({
  //     status: "error",
  //     error: err,
  //   });
  // }
});
exports.login = (req, res) => {
  res.status(200).json({
    status: "success",
    message: "no login implemented",
  });
};
exports.getAllUsers = (req, res) => {
  res.status(200).json({
    status: "success",
    message: "no data added yet to this route",
  });
};
exports.getOneUser = (req, res) => {
  res.status(200).json({
    status: "success",
    message: "no data added yet to this route too",
  });
};
exports.deleteUser = (req, res) => {
  res.status(204).json({
    status: "success",
    data: {},
  });
};
