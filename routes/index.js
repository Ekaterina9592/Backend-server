
const { NotFoundError } = require('../http-errors');
const express = require('express');
const router = express.Router();


/* GET home page. */
router.get('/', (req, res, next) => {
    res.render('index', { title: 'Server Starter Kit' });
});

// app.use('/users', router);


// catch 404 and forward to error handler
router.use((req, res, next) => {
    next(new NotFoundError('ERR_ROUTE_NOT_FOUND'));
});

module.exports = router;
