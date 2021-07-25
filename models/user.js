const mongoose = require("mongoose");
// const Schema = mongoose.Schema;

const userSchema = mongoose.Schema({
  uniqueId: { type: String }, // for Testing
  name: { type: String, require: true },
  email: { type: String, require: true },
  password: { type: String, require: true },
  photo: String,
  age: Date,
  gender: String,
  height: Number,
  weight: Number,
  healthCondition: [String],
  myDoctor: { type: mongoose.Schema.Types.ObjectId, ref: "doctor_Schema" },
});

module.exports = mongoose.model("userSchema", userSchema);
