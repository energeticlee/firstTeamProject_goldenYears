const User = require("./user");
const { Schema, model } = require("mongoose");

const testOneChairStand = new Schema({
  date: { type: Number, required: true },
  result: { type: Number, required: true },
  user: [{ type: Schema.Types.ObjectId, ref: "userSchema" }],
});

const TestOneChairStand = model("test_1_Chair_Stand", testOneChairStand);

const testTwoArmCurl = new Schema({
  date: { type: Number, required: true },
  result: { type: Number, required: true },
  user: { type: Schema.Types.ObjectId, ref: "userSchema" },
});

const TestTwoArmCurl = model("test_2_Arm_Curl", testTwoArmCurl);

const testThree2MinStep = new Schema({
  date: { type: Number, required: true },
  result: { type: Number, required: true },
  user: { type: Schema.Types.ObjectId, ref: "userSchema" },
});

const TestThree2MinStep = model("test_3_2_Min_Step", testThree2MinStep);

module.exports = { TestOneChairStand, TestTwoArmCurl, TestThree2MinStep };
