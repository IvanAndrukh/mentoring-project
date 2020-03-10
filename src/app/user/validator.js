const joi = require('joi');

const { validateInput } = require('../common/utils');

const create = (req, res, next) => {
  try {
    const createSchema = joi.object.keys({
      name: joi.string().required(),
    });

    validateInput(req.body, createSchema);

    return next();
  } catch (error) {
    return next(error);
  }
};

module.exports = {
  create,
};
