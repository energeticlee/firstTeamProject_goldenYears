const mongoose = require("mongoose");

const test_Two_Schema = new mongoose.Schema({
  date: { type: Date, required: true },
  result: { type: Number, required: true },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "user_Schema" },
});

module.exports = mongoose.model("test_Two_Schema", test_Two_Schema);
