const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  id: Number,
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  photo: String,
  age: Number,
  gender: { type: String, required: true },
  height: { type: Number, required: true },
  weight: { type: Number, required: true },
  health_conditions: [String],
  admin: { type: Boolean, required: true },
  doctor: { type: String, required: true },
  test_1: [{ type: Schema.Types.ObjectId, ref: "userSchema" }],
  test_2: [{ type: Schema.Types.ObjectId, ref: "userSchema" }],
  test_3: [{ type: Schema.Types.ObjectId, ref: "userSchema" }],
});

const User = mongoose.model("User", userSchema);
