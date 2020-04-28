const { User } = require('../../../db/mongo/models');

const create = values => User.create(values);

const userExists = (email, phone) => User.findOne({ $or: [{ email }, { phone }] });

const findById = id => User.findById(id);

const list = (filter = {}) => User.find(filter);

const update = (values, where = {}) => User.update(where, values);

const updateById = (values, id) => User.updateOne(values, { id });


module.exports = {
  create,
  userExists,
  findById,
  list,
  updateById,
  update,
};
