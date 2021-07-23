const mongoose = require("mongoose");
const User = require("./user");

const test_One_Schema = new mongoose.Schema({
  date: { type: Number, required: true },
  result: { type: Number, required: true },
  user: User.schema,
});

module.exports = mongoose.model("test_One_Schema", test_One_Schema);
