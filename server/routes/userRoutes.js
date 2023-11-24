const express = require("express");
const userController = require("../controller/userController");

const userRouter = express.Router();
userRouter.post("/signup", userController.signup);
userRouter.post("/login", userController.login);
// userRouter.post("/forgotPassword", userController.forgotPassword);
// userRouter.patch("/resetPassword/:token", userController.resetPassword);
// userRouter.patch("/updateMe", userController.updateMe);
userRouter.get("/getUsers", userController.getAllUsers);
userRouter.get("/getOneUser/:id", userController.getOneUser);
userRouter.delete("/deleteUser/:id", userController.deleteUser);

module.exports = userRouter;
