const express = require('express.js');
const fs = require('fs');
const path = require('path');
const dataBase = require('./db/db.json');
const app = express();
const util = require('util');
const PORT = 3001;


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, 'notes.html'))
});

app.listen(PORT, () => {
  console.log(`App listening at http://localhost:${PORT}`);
});