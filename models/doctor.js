const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const doctorSchema = mongoose.Schema({
  uniqueId: { type: String }, // for Testing
  name: { type: String, default: undefined },
  email: { type: String, default: undefined },
  password: { type: String, default: undefined },
  photo: { type: String, default: undefined },
  age: { type: Date, default: Date.now() },
  gender: { type: String, default: undefined },
  myPatients: [
    { type: Schema.Types.ObjectId, ref: "userSchema", default: null },
  ],
  myPendingPatients: [
    { type: Schema.Types.ObjectId, ref: "userSchema", default: null },
  ],
});

module.exports = mongoose.model("doctorSchema", doctorSchema);
