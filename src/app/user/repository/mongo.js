const { User } = require('../../../db/mongo/models');

const create = values => User.create(values);

const userExists = (email, phone) => User.findOne({ $or: [{ email }, { phone }] });

module.exports = {
  create,
  userExists,
};
