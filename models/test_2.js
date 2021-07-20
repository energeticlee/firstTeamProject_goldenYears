const mongoose = require("mongoose");

const test_Two_Schema = new mongoose.Schema({
  date: { type: Date, required: true },
  result: { type: Number, required: true },
  user: { type: Schema.Types.ObjectId, ref: "user_Schema" },
});

const test_Two_Schema = mongoose.model("test_Two_Schema", test_Two_Schema);

module.exports = test_Two_Schema;
