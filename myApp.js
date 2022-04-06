var express = require("express");
var app = express();
var bGround = require("fcc-express-bground");
require('dotenv').config()

console.log("Hello World");

// sends a single string
// app.get("/", function(req, res) {
//   res.send('Hello Express');
// })

// sends index.html file
// __dirname Gives absolute path of the directory that contains the currently executing file.
app.get("/", (req, res) => {
  let absolutePath = __dirname + "/views/index.html";
  res.sendFile(absolutePath);
});

// public folder which contains CSS
app.use("/public", express.static(__dirname + "/public"));

// json data at URL/json
app.get("/json", (req, res) => {
  console.log(process.env.MESSAGE_STYLE, "<= message style")
  if (process.env.MESSAGE_STYLE === "uppercase") {
    res.json({ "message": "HELLO JSON" });
  } else {
    res.json({ "message": "Hello json" });
  }
});

module.exports = app;
