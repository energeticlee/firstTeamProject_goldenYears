const mongoose = require("mongoose");
// const Schema = mongoose.Schema;

const seedSchema = mongoose.Schema({
  name: { type: String },
});

module.exports = mongoose.model("seedSchema", seedSchema);
