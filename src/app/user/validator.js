const joi = require('joi');
const { BadRequest } = require('http-errors');

const { validateInput, validatorWrapper } = require('../../common');
const { USER_ROLES } = require('../../constants');
const repository = require('./repository');

const userExists = async (req) => {
  const { db } = req.params;
  const { email, phone } = req.body;
  const userRepo = repository[db];

  const existingUser = await userRepo.userExists(email, phone);

  if (existingUser) {
    throw new BadRequest(`User with email: ${email} or phone: ${phone} has already exists`);
  }
};

const create = req => validateInput(
  { ...req.params, ...req.body },
  joi.object().keys({
    name: joi.string().required(),
    userRole: joi.string().valid(Object.values(USER_ROLES)).required(),
    surname: joi.string().required(),
    phone: joi.string().required(),
    email: joi.string().email().required(),
    birthday: joi.date().iso().required(),
    db: joi.string().valid(['mongo', 'mysql']).required(),
  }),
);

const get = req => validateInput(req.params, { id: joi.string().required() });

module.exports = {
  userExists: validatorWrapper(userExists),
  create: validatorWrapper(create),
  get: validatorWrapper(get),
};
