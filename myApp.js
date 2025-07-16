let express = require('express');
let path = require('path'); 
let app = express();

console.log("Hello World");


app.get("/", function(req, res) {
  res.sendFile(__dirname + '/views/index.html'); // absolute path
});



































 module.exports = app;
