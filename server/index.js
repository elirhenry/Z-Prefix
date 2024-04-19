const express = require('express');
const app = express();
const port = 8080;
const items = require('./MyStoreItems');
const allitems = require('./AllStoreItems');
// const users = require('./Users');

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

//////////////////////////////////////////////////

app.get('/items', (req, res) => {
  res.status(200).json(items);
});

app.post('/items', (req, res) => {
  res.status(201).json(items);
});

////

app.get('/all-items', (req, res) => {
  res.status(200).json(allitems);
});

app.post('/all-items', (req, res) => {
  res.status(201).json(allitems);
});

//////////////////////////////////////////////////

app.listen(port, () => {
  console.log(`Server on port ${port}`);
})