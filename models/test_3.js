const mongoose = require("mongoose");

const test_Three_Schema = new mongoose.Schema({
  date: { type: Date, required: true },
  result: { type: Number, required: true },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "user_Schema" },
});

const test_Three_Schema = mongoose.model(
  "test_Three_Schema",
  test_Three_Schema
);

module.exports = test_Three_Schema;
