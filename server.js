const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();

//const dictionary = JSON.parse(
  //fs.readFileSync('./lib/dictionary.json')
//).dictionary;

app.set('view engine', 'ejs');
app.set('view options', { layout: false });
app.use('/public', express.static('public'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('HomePage');
});

app.get('/believe/self-awareness', (req, res) => {
  res.send('/believe/self-awareness page');
});

app.get('believe/experiences', (req, res) => {
  res.send('/believe/experiences page');
});

app.get('/believe/expression', (req, res) => {
  res.send('/believe/expression page');
});


app.get('/believe/mentoring', (req, res) => {
  res.send('/believe/mentoring page');
});


app.get('/believe/accountability', (req, res) => {
  res.send('/believe/accountability page');
});


app.get('/believe/habits', (req, res) => {
  res.send('/believe/habits page');
});


app.get('/believe/environment', (req, res) => {
  res.send('/believe/environment page');
});

app.get('/believe/action-plan', (req, res) => {
  res.send('/believe/action-plan page');
});

app.listen(process.env.PORT || 3000);

console.log('Listening on port: ' + (process.env.PORT || 3000));
