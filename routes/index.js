
const express = require('express');
const router = express.Router();
const app = require('../app');
const createError = require('http-errors');

app.use('/users', router);

// catch 404 and forward to error handler
app.use((req, res, next) => {
    next(createError(404));
});

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Express' });
});

module.exports = router;
