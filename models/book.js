const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  id: String,
  name: {
    type: String,
  },
  type: String,
  time: String,
});
const facilities = mongoose.model("facilities", userSchema);
module.exports = facilities;
