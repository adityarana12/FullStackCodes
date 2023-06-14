const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
const users = [
  { id: 1, name: 'Aditya Rana' },
  { id: 2, name: 'Saurav Singh Rawat' },
  { id: 3, name: 'Vishal Nain' }
];

// API endpoint to get all users
app.get('/api/users', (req, res) => {
  res.json(users);
});

app.listen(3001, () => {
  console.log('Server is listening on port 3001');
});