const joi = require('joi');
const { BadRequest } = require('http-errors');

module.exports = (params, schema) => {
  const { error } = joi.validate(params, schema);

  if (error) { throw BadRequest(error.message); }
};
