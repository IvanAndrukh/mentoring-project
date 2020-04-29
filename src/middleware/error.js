/* eslint-disable no-unused-vars */

const { HttpError, InternalServerError } = require('http-errors');

const logger = require('../common/logger');

module.exports = (err, req, res, next) => {
  if (err instanceof HttpError) {
    logger.error(err);

    const errStatus = err.statusCode || err.status;
    const errObj = {
      status: 'Error',
      error: err.expose ? err.name : 'Error',
      message: err.expose ? err.message : '',
    };

    res.status(errStatus).json(errObj);
  } else {
    logger.error(`Uncaught Exception: ${err}`);

    const errStatus = 500;
    const errObj = {
      status: 'Error',
      error: err.name || 'Uncaught Exception',
      message: `Internal Server Error: ${err.message}`,
    };

    res.status(errStatus).send(JSON.stringify(errObj, null, 2));
  }
};
