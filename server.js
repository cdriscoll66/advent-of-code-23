const express = require('express');
const dayOne = require('./day1.js'); 

const app = express();
const port = 3000;

app.get('/', (req, res) => {

  res.send(dayOne());
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});