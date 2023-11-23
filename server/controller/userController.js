const mongoose = require("mongoose");
const User = require("../model/userModel");

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
