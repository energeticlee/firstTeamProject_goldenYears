const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  id: Number,
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true, unique: true },
  photo: String, //URL
  age: Number,
  gender: { type: String, required: true }, // Standardise as M/F
  height: { type: Number, required: true },
  weight: { type: Number, required: true },
  health_conditions: String,
  admin: { type: Boolean, required: true },
  doctor: { type: String, required: true },
  test_1: [{ type: Schema.Types.ObjectId, ref: "test_1_Schema" }],
  test_2: [{ type: Schema.Types.ObjectId, ref: "test_2_Schema" }],
  test_3: [{ type: Schema.Types.ObjectId, ref: "test_3_Schema" }],
});

const User = mongoose.model("User", userSchema);

module.exports = User;
