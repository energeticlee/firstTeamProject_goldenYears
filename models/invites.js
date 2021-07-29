const mongoose = require("mongoose");
// const Schema = mongoose.Schema;

const matchSchema = mongoose.Schema({
  status: { type: String, default: "pending" },
  patient: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "userSchema",
    default: null,
  },
  doctor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "doctorSchema",
    default: null,
  },
});

module.exports = mongoose.model("matchSchema", matchSchema);
