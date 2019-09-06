
const BaseError = require('../http-errors/BaseError');
const { InternalError } = require('../http-errors');


exports.mainErrorController = (err, req, res, next) => {
    console.error(err);

    if (!(err instanceof BaseError)) err = new InternalError();

    res.status(err.status || 500).json(err);
};
