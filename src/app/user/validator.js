const joi = require('joi');
const { BadRequest } = require('http-errors');

const { validateInput } = require('../../common/utils');
const repository = require('./repository');

const create = async (req, res, next) => {
  try {
    const createSchema = joi.object().keys({
      name: joi.string().required(),
      surname: joi.string().required(),
      phone: joi.string().required(),
      email: joi.string().email().required(),
      birthday: joi.date().iso().required(),
      db: joi.string().valid(['mongo', 'mysql']).required(),
    });

    validateInput({ ...req.params, ...req.body }, createSchema);

    const { db } = req.params;
    const { email, phone } = req.body;
    const userRepo = repository[db];

    const existingUser = await userRepo.userExists(email, phone);

    if (existingUser) {
      throw new BadRequest(`User with email: ${email} or phone: ${phone} has already exists`);
    }

    return next();
  } catch (error) {
    return next(error);
  }
};

module.exports = {
  create,
};
