//Dependencies - Express
const express = require("express");
const session = require("express-session");
require("dotenv").config();
const methodOverride = require("method-override");

//Import Models - Mongoose

//Dependencies - Mongoose
const mongoose = require("mongoose");

//Configurations - Express
const app = express();
const port = process.env.PORT;
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

//Routes (app.use)
app.get("/api/userInfo", (req, res) => [res.send("hello")]);

//Server Listening
app.listen(port, () => {
  console.log("Listening on PORT:", port);
});
