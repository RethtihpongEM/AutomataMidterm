const express = require('express')
const request = require('request');

// express app
const app = express()

// to issue cors origin
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

// get dummy data
app.get('/api', (req, res) => {
  res.json({"data": ["user1", "user2", "user3"]})
})

// server listen port
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server started on port http://localhost:${PORT}`);
})