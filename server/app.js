const express = require("express");
const userRouter = require("./routes/userRoutes");
const chatRouter = require("./routes/chatRoutes");
const messageRouter = require("./routes/messageRoutes");
const http = require("node:http");
const { Server } = require("socket.io");
const dbconnect = require("./server");
const dotenv = require("dotenv");

dotenv.config({ path: "./config.env" });
dbconnect();
const app = express();
const server = http.createServer(app);
const io = new Server(server);

//middlewares..

app.use(express.json());
app.use("/api/v1/user", userRouter);
app.use("/api/v1/chats", chatRouter);
app.use("/api/v1/message", messageRouter);

app.get("/", () => {
  console.log("hello there from backend");
});

server.listen(process.env.PORT, () => {
  console.log(`server has started running at port:${process.env.PORT}...`);
});
