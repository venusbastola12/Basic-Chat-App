const Chat = require("../model/chatModel");
const mongoose = require("mongoose");

exports.searchChat = (req, res) => {
  res.status(200).json({
    status: "success",
    message: "search yet not implemented",
  });
};
exports.getAllChats = (req, res) => {
  res.status(200).json({
    status: "success",
    message: "it is not implemented yet",
  });
};
exports.deleteChat = (req, res) => {
  res.status(204).json({
    status: "success",
    data: {},
  });
};
