require('dotenv').config();
let express = require('express');
let app = express();

console.log("Hello World");

// Serve static files from /public
app.use('/public', express.static(__dirname + '/public'));

// Root route now returns JSON based on MESSAGE_STYLE
app.get("/", function(req, res) {
  let message = "Hello json";
  
  if (process.env.MESSAGE_STYLE === 'uppercase') {
    message = message.toUpperCase();
  }

  res.json({ message: message });
});


































 module.exports = app;
