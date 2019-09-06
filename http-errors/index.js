
const BaseError = require('./BaseError');


class NotFoundError extends BaseError {
    constructor(code, msg) {
        super(404, code || 'ERR_NOT_FOUND', msg || '');
    }
}
exports.NotFoundError = NotFoundError;


class InternalError extends BaseError {
    constructor(code, msg) {
        super(500, code || 'ERR_INTERNAL', msg || '');
    }
}
exports.InternalError = InternalError;
