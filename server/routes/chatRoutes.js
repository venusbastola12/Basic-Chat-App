const express = require("express");
const chatController = require("../controller/chatController");

const chatRouter = express.Router();

chatRouter.post("/searchChat", chatController.searchChat);
chatRouter.get("/getAllChats", chatController.getAllChats);
chatRouter.patch("/deleteChat", chatController.deleteChat);

module.exports = chatRouter;
