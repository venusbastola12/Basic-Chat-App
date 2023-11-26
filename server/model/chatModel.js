const mongoose = require("mongoose");

const chatSchema = new mongoose.Schema({
  user: {
    type: String,
    required: [true, "username is required field"],
  },
  NewMessageCount: {
    type: Number,
  },
  messages: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Message",
  },
  ActiveStatus: {
    type: Boolean,
    default: false,
  },
});
const Chat = mongoose.model("Chat", chatSchema);
module.exports = Chat;
