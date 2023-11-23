const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema({
  message: {
    type: String,
    required: true,
  },
  createdAt: Date,
});
const Message = mongoose.model("Message", messageSchema);
module.exports = Message;
