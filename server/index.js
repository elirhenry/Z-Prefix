const express = require('express');
const app = express();
const port = 8080;

const items = require('./Items');

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

app.get('/', (req, res) => {
  res.status(200).json('Server Home Page');
});

app.get('/items', (req, res) => {
  res.status(200).json(items);
});

app.post('/items', (req, res) => {
  // const newItem= req.body;
  // items.push(newItem);
  res.status(201).json(items);
});


app.listen(port, () => {
  console.log(`Server on port ${port}`);
})