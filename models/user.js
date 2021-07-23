const mongoose = require("mongoose");
// const Schema = mongoose.Schema;

const user_Schema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true, unique: true },
  photo: String, //URL
  age: Number,
  gender: { type: String, required: true }, // Standardise as M/F
  height: { type: Number, required: true },
  weight: { type: Number, required: true },
  health_conditions: String,
  doctor: { type: Boolean, default: false },
  test_1: [{ type: mongoose.Schema.Types.ObjectId, ref: "test_One_Schema" }],
  test_2: [{ type: mongoose.Schema.Types.ObjectId, ref: "test_Two_Schema" }],
  test_3: [{ type: mongoose.Schema.Types.ObjectId, ref: "test_Three_Schema" }],
});

module.exports = mongoose.model("seedSchema", seedSchema);
