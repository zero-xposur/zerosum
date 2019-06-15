const express = require('express');
const app = express();
const path = require('path');
const morgan = require('morgan');
const session = require('express-session');
const bodyParser = require('body-parser');
const compression = require('compression');

const cors = require('cors');

app.use(compression());
app.use(cors());
// app.use(express.json());

// Use application-level middleware for common functionality, including
// logging, parsing, and session handling.
app.use(require('morgan')('combined'));
app.use(require('cookie-parser')());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ limit: '10mb' }));
app.use(
    require('express-session')({
        secret: 'keyboard cat',
        resave: true,
        saveUninitialized: true,
    })
);
// app.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   next();
// });
app.use(express.static(path.join(__dirname, '..', 'dist')));
app.get('/privacy', (req, res, next) =>
    res.sendFile(path.join(__dirname, '../privacy.html'))
);

app.get('/', (req, res, next) =>
    res.sendFile(path.join(__dirname, '../index.html'))
);

// authentication router
app.use('/api', require('./routes'));

// Handle 404s
app.use((req, res, next) => {
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
});

app.use((error, req, res, next) => {
    let errors = [error];
    if (error.errors) {
        error = error.errors.map(_error => {
            return _error.message;
        });
    } else if (error.original) {
        errors = [error.original.message];
    }
    res.status(error.status || 500).send({ errors });
});

module.exports = app;
