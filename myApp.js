let express = require('express');
let path = require('path'); 
let app = express();

console.log("Hello World");


app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});



































 module.exports = app;
