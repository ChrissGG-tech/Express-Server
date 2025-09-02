// Import required packages
var morgan = require('morgan'); // HTTP request logger middleware
const express = require('express'); // Express framework
const app = express(); // Create Express app instance
var path = require('path'); // Node.js path module

// Load top spots data from JSON file
const myData = require('./data.json');


// Returns the top spots data as raw JSON (API endpoint)
app.get('/data', (req, res) => {
  res.json(myData);
});

// Route: GET /
// Displays the top spots data as a simple HTML list on the front page
app.get('/', (req, res) => {
  let html = `<html><head><title>San Diego Activities</title></head><body>`;
  html += `<h1>San Diego Activities</h1><ul>`;
  myData.forEach(item => {
    html += `<li><strong>${item.name}</strong><br>${item.description}<br><em>Location: [${item.location.join(', ')}]</em></li><br>`;
  });
  html += `</ul></body></html>`;
  res.send(html);
});

// Export the Express app instance for use in index.js
module.exports = app;


