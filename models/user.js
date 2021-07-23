const mongoose = require("mongoose");
// const Schema = mongoose.Schema;

const userSchema = mongoose.Schema({
  name: { type: String },
});

module.exports = mongoose.model("userSchema", userSchema);
