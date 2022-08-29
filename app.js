var express = require("express"),
  app = express(),
  port = 7001,
  mongoose = require("mongoose"),
  bodyParser = require("body-parser"),
  multer = require("multer");
useru = require("./Models/candidates");
controlleru = require("./controller/controller");

//mongoose.Promise = global.Promise;
mongoose.connect("mongodb://18.237.42.182/my"); // live
// mongoose.connect("mongodb:///Candidate"); // local
var path = __dirname;
// app.use("/videoapp/data", express.static(path + "/data"));

app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type,Auth_Token"
  );
  res.setHeader("Access-Control-Allow-Credentials", true);
  next();
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.set("port", port);

const routes = require("./Routes/routes");
routes(app);

app.listen(port);
module.exports = app;

console.log("todo list RESTful API server started on: " + port);
