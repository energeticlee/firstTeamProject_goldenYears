// Express - Dependencies
const express = require("express");
const cors = require("cors");
require("dotenv").config();

// Mongoose - Dependencies
const mongoose = require("mongoose");

// Express - Configurations
const app = express();
const port = process.env.PORT || 3333;

// Mongoose - Configurations
const MONGO_URI = "mongodb://localhost:27017/products";
mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
});

// Middleware configurations
const whitelist = [
  "http://localhost:3000",
  "http://localhost:3003",
  "https://fathomless-sierra-68956.herokuapp.com",
];
const corsOptionsDelegate = function (req, callback) {
  let corsOptions;
  if (whitelist.indexOf(req.header("Origin")) !== -1) {
    corsOptions = { origin: true };
  } else {
    corsOptions = { origin: false };
  }
  callback(null, corsOptions);
};

// Middlerware Linked => Express
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
// app.use(express.static("./client/build"));

//Import/Require Controllers for express routing
const seedController = require("./controller/seed");
const userController = require("./controller/user");
const fitnessTestController = require("./controller/fitnessTest");
const fakeTestData1 = require("./controller/fakeTestData1");
const userTestData = require("./controller/userTestData");

//Routes
app.use("/api/seed", seedController);
app.use("/api/user", userController);
app.use("/api/fitnesstest", fitnessTestController);
app.use("/api/faketestdata1", fakeTestData1);

// Server Linked => Database
mongoose.connection.once("open", () => {
  console.log("Connected to mongo");
});

//Server Listening
app.listen(port, () => {
  console.log("Listening on PORT:", port);
});
