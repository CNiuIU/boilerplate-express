require('dotenv').config(); // Load .env variables

let express = require('express');
let app = express();

console.log("Hello World");

// Serve static files if needed (optional)
app.use('/public', express.static(__dirname + '/public'));

// Root route (not part of this challenge, but commonly included)
app.get("/", function(req, res) {
  res.sendFile(__dirname + "/views/index.html");
});

// ✅ /json route that changes based on MESSAGE_STYLE
app.get("/json", function(req, res) {
  let message = "Hello json";

  if (process.env.MESSAGE_STYLE === "uppercase") {
    message = message.toUpperCase();
  }

  res.json({ message: message });
});

module.exports = app;


































 module.exports = app;
