//Dependencies - Express
const express = require("express");
// const session = require("express-session");
// const cors = require("cors");
require("dotenv").config();
const methodOverride = require("method-override");

//Import Models - Mongoose

//Dependencies - Mongoose
const mongoose = require("mongoose");

//Configurations - Express
const app = express();
const port = process.env.PORT || 3333;
// app.use(
//   session({
//     secret: process.env.SECRET,
//     resave: false,
//     saveUninitialized: false,
//   })
// );
app.use(methodOverride("_method"));
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

//Configurations = Mongoose
mongoose.connect("mongodb://localhost:27017/products", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});

mongoose.connection.once("open", () => {
  console.log("Connected to mongo");
});

//Import/Require Controllers for express routing
const seedController = require("./controller/seed");
const userController = require("./controller/user");
const fakeTestData1 = require("./controller/fakeTestData1");

//Routes (app.use)
app.get("/", (req, res) => {
  res.send("Hello");
});
app.use("/api/seed", seedController);
app.use("/api/user", userController);
app.use("/api/fakeTestData1", fakeTestData1);

//Server Listening
app.listen(port, () => {
  console.log("Listening on PORT:", port);
});
