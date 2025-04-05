const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();

app.use(cors());
app.use(express.json());

// API route
let fruits = [];
app.post('/addFruit', (req, res) => {
  const { fruit } = req.body;
  fruits.push(fruit);
  res.json(fruits);
});

// Serve static React files
app.use(express.static(path.join(__dirname, 'build')));

// For any route not matching the API, serve the React app
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
