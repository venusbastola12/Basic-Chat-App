const Message = require("../model/messageModel");
//const mongoose = require("mongoose");
const ApiError = require("../utils/apiError");
const catchAsync = require("../utils/catchAsync");

// exports.getMessages = (req, res) => {
//   res.status(200).json({
//     status: "success",
//     message: "it is not made functionable yet",
//   });
// };
exports.createMessage = catchAsync(async (req, res, next) => {
  // res.status(200).json({
  //   status: "success",
  //   message: "message cannot be send yet",
  // });
  const newMessage = await Message.create(req.body);
  res.status(200).json({
    status: "success",
    data: {
      newMessage,
    },
  });
});
exports.deleteMessage = catchAsync(async (req, res, next) => {
  // res.status(204).json({
  //   status: "success",
  //   data: {},
  // });
  await Message.findOneAndDelete({ _id: req.params.id });
  res.status(204).json({
    status: "success",
    data: {},
  });
});
