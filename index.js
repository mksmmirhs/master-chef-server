const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());

const data = require('./data.json');

app.get('/', (req, res) => {
  res.send('API is running');
});

app.get('/data', (req, res) => {
  res.send(data);
});

app.listen(port, () => {
  console.log(`Api is running on port: ${port}`);
});
