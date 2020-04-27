const { User } = require('../../../db/mongo/models');

const create = values => User.create(values);

const userExists = (email, phone) => User.findOne({ $or: [{ email }, { phone }] });

const findById = id => User.findById(id);

const list = (filter = {}) => User.find(filter);


module.exports = {
  create,
  userExists,
  findById,
  list,
};
