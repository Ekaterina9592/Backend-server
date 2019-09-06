
const express = require('express');
const path = require('path');
const morgan = require('morgan');
const indexRouter = require('./routes');

const app = express();


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(morgan('dev'));
app.use(express.json({ limit: '5mb' }));
app.use(express.urlencoded({ extended: false, limit: '5mb' }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);

app.use((err, req, res, next) => {
  console.error(err);

  if (!(err instanceof BlogError)) err = new Err.Internal();

  res.status(err.status || 500).json(err);
});

module.exports = app;
