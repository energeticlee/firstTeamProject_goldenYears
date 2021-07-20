const mongoose = require("mongoose");

const test_One_Schema = new mongoose.Schema({
  date: { type: Date, required: true },
  result: { type: Number, required: true },
  user: { type: Schema.Types.ObjectId, ref: "user_Schema" },
});

const test_One_Schema = mongoose.model("test_One_Schema", test_One_Schema);

module.exports = test_One_Schema;
