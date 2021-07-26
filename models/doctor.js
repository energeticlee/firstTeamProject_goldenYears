const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const doctorSchema = mongoose.Schema({
  uniqueId: { type: String }, // for Testing
  name: { type: String },
  email: { type: String },
  password: { type: String },
  photo: String,
  age: Date,
  gender: String,
  myPatients: [{ type: Schema.Types.ObjectId, ref: "userSchema" }],
});

module.exports = mongoose.model("doctorSchema", doctorSchema);
