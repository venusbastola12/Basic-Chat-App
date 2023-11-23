const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema({
  message: {
    type: String,
    trim: true,
  },
  createdAt: Date,
});
const Message = mongoose.model("Message", messageSchema);
module.exports = Message;
