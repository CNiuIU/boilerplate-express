let express = require('express');
let app = express();
console.log("Hello World");

app.get(function(req, res) {
  
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});



































 module.exports = app;
