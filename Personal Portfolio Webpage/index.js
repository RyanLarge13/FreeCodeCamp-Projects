const express = require('express'),
morgan = require('morgan'),
path = require('path'),
uuid = require('uuid'),
parser = require('body-parser'),
DB = require('mongodb');
const app = express();

app.use(parser.json());
app.use(express.static('public'));
app.use(morgan('common'));

app.get('/resume', (req, res) => {
  res.sendFile('public/resume.html', { root: __dirname});
});
app.get('/aboutme', (req, res) => {
  res.sendFile('public/aboutme.html', { root: __dirname});
});
app.get('/contact', (req, res) => {
  res.sendFile('public/contact.html', { root: __dirname});
});

app.listen(8080, () => {
  console.log('Your app is listening on port 8080');
});