const joi = require('joi');
const createHttpError = require('http-errors');

const validateInput = (params, schema) => {
  const { error } = joi.validate(params, schema);

  if (error) { throw createHttpError(400, error); }
};

module.exports = { validateInput };
