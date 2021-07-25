const mongoose = require("mongoose");
const User = require("./user");

const Schema = mongoose.Schema;

const test_One_Schema = new Schema({
  date: { type: Number, required: true },
  result: { type: Number, required: true },
  // user: [{ type: Schema.Types.ObjectId, ref: "userSchema" }],
});

module.exports = mongoose.model("test_One_Schema", test_One_Schema);
