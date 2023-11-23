const Message = require("../model/messageModel");
const mongoose = require("mongoose");

exports.getMessages = (req, res) => {
  res.status(200).json({
    status: "success",
    message: "it is not made functionable yet",
  });
};
exports.sendMessage = (req, res) => {
  res.status(200).json({
    status: "success",
    message: "message cannot be send yet",
  });
};
exports.deleteMessage = (req, res) => {
  res.status(204).json({
    status: "success",
    data: {},
  });
};
