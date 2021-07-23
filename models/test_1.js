const mongoose = require("mongoose");

const testOneSchema = mongoose.Schema({
  date: { type: Date, required: true },
  result: { type: Number, required: true },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "userSchema" },
});

const testOneSchema = mongoose.model("testOneSchema", testOneSchema);

module.exports = test_One_Schema;
