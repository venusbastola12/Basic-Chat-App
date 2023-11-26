const express = require("express");
const messageController = require("../controller/messageController");
const authenticationController = require("../controller/authenticationController");

const messageRouter = express.Router();

//messageRouter.get("/getMessages/:id", messageController.getMessages);
messageRouter.post(
  "/",
  authenticationController.protect,
  messageController.createMessage
);
messageRouter.patch("/deleteMessage", messageController.deleteMessage);

module.exports = messageRouter;
