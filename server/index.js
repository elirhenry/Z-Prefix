const express = require('express');
const app = express();
const port = 8080;
const items = require('./MyStoreItems');
// const users = require('./Users');

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

//////////////////////////////////////////////////

app.get('/', (req, res) => {
  res.status(200).json('Server Home Page');
});

app.get('/items', (req, res) => {
  res.status(200).json(items);
});

app.post('/items', (req, res) => {
  res.status(201).json(items);
});

////

// app.get('/users', (req, res) => {
//   res.status(200).json(users);
// });

// app.post('/users', (req, res) => {
//   res.status(201).json(users);
// });

// app.post('/login', (req, res) => {
//   const { username, password } = req.body;
//   const user = users.find(user => user.username === username && user.password === password);
//   if (user) {
//     // User found, send success response
//     res.status(200).json({ message: 'Login successful', user });
//   } else {
//     // User not found or incorrect password, send error response
//     res.status(401).json({ message: 'Incorrect username or password' });
//   }
// });

//////////////////////////////////////////////////

app.listen(port, () => {
  console.log(`Server on port ${port}`);
})