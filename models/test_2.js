const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const test_Two_Schema = new Schema({
  date: { type: Number, required: true },
  result: { type: Number, required: true },
  // user: { type: mongoose.Schema.Types.ObjectId, ref: "user_Schema" },
});

module.exports = mongoose.model("test_Two_Schema", test_Two_Schema);
