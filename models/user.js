const mongoose = require("mongoose");
// const Schema = mongoose.Schema;

const userSchema = mongoose.Schema({
  uniqueId: { type: String }, // for Testing
  name: { type: String },
  email: { type: String },
  password: { type: String },
  photo: { type: String, default: undefined },
  age: { type: Date, default: Date.now() },
  gender: { type: String, default: undefined },
  height: { type: Number, default: 0 },
  weight: { type: Number, default: 0 },
  healthCondition: { type: String, default: undefined },
  myDoctor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "doctorSchema",
    default: null,
  },
});

module.exports = mongoose.model("userSchema", userSchema);
