const mongoose = require("mongoose");

const messageSchema = mongoose.Schema({
  date: {
    type: String,
    default:
      Date().split(" ")[0] +
      " " +
      Date().split(" ")[1] +
      " " +
      Date().split(" ")[2] +
      " " +
      Date().split(" ")[3]
  },
  name: {
    type: String
  },
  email: {
    type: String
  },
  message: {
    type: String
  }
});
const Messages = mongoose.model("Messages", messageSchema);

module.exports = Messages;
