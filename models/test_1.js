const mongoose = require("mongoose");

const test_OneSchema = (newSchema = {
  id: Number,
  date: { type: Date },
  result: { type: Number, required: true },
  user: { type: Schema.Types.ObjectId, ref: "userSchema" },
});

const test_One = mongoose.model("test_One", test_OneSchema);

module.exports = test_One;
