const express = require("express");
const messageController = require("../controller/messageController");

const messageRouter = express.Router();

messageRouter.get("/getMessages/:id", messageController.getMessages);
messageRouter.post("/sendMessage/:id", messageController.sendMessage);
messageRouter.patch("/deleteMessage", messageController.deleteMessage);

module.exports = messageRouter;
