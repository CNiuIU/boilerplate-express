require('dotenv').config(); // Load environment variables

let express = require('express');
let app = express();

console.log("Hello World");

// Serve static files from /public at the /public path
app.use('/public', express.static(__dirname + '/public'));

// Serve index.html at root path (optional if you need it)
app.get("/", function(req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

// ✅ /json route changes response based on MESSAGE_STYLE
app.get("/json", function(req, res) {
  let message = "Hello json";

  if (process.env.MESSAGE_STYLE === "uppercase") {
    message = message.toUpperCase(); // → "HELLO JSON"
  }

  res.json({ message: message });
});


































 module.exports = app;
