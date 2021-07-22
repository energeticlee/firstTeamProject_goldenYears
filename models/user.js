const mongoose = require("mongoose");

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
	admin: { type: Boolean, required: true },
	doctor: { type: String, required: true },
	test_1: [{ type: Schema.Types.ObjectId, ref: "test_One_Schema" }],
	test_2: [{ type: Schema.Types.ObjectId, ref: "test_Two_Schema" }],
	test_3: [{ type: Schema.Types.ObjectId, ref: "test_Three_Schema" }],
});

const User = mongoose.model("User", user_Schema);

module.exports = User;
