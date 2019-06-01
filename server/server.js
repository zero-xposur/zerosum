const express = require('express');
const app = express();
const path = require('path');

app.use(express.json());

// Use application-level middleware for common functionality, including
// logging, parsing, and session handling.
app.use(require('morgan')('combined'));
app.use(require('cookie-parser')());
app.use(require('body-parser').urlencoded({ extended: true }));
app.use(require('express-session')({ secret: 'keyboard cat', resave: true, saveUninitialized: true }));
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.use(express.static(path.join(__dirname, '..', 'dist')));

app.get('/', (req, res, next) =>
  res.render(path.join(__dirname, '../index.html'), 
  {user: undefined})
);
app.get('/privacy', (req, res, next) =>
  res.sendFile(path.join(__dirname, '../privacy.html'))
);

app.use('/api', require('./routes'));

module.exports = app;
