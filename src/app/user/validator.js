const joi = require('joi');

const { validateInput } = require('../../common/utils');

const create = (req, res, next) => {
  try {
    const createSchema = joi.object.keys({
      name: joi.string().required(),
      db: joi.string().valid(['mongo', 'mysql']),
    });
    const inputParams = { ...req.body, ...req.params };

    validateInput(inputParams, createSchema);

    return next();
  } catch (error) {
    return next(error);
  }
};

module.exports = {
  create,
};
