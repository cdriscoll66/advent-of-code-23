const express = require('express');
const dayOne = require('./day1.js'); 
const dayTwo = require('./day2.js'); 

const app = express();
const port = 3003;

app.get('/', (req, res) => {

  res.send(dayTwo());
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});