
const express = require('express');
const compression = require('compression');
const path = require('path');
const morgan = require('morgan');
const indexRouter = require('./routes');
const { mainErrorController } = require('./controllers/error.controller');


const app = express();

/**
 * Сжатие данных перед отправкой клиенту.
 * */
app.use(compression());


/**
 * На production morgan сильно снижает rps, плюс он там не нужен.
 * Слишком много запросов ненужных логировать будет.
 * */
if (process.env.NODE_ENV !== 'production') {
    app.use(morgan('dev'));
}

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(morgan('dev'));
app.use(express.json({ limit: '5mb' }));
app.use(express.urlencoded({ extended: false, limit: '5mb' }));
app.use(express.static(path.join(__dirname, 'public')));


app.use('/', indexRouter);
app.use(mainErrorController);

module.exports = app;
