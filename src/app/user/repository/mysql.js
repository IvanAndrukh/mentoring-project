const User = require('../../../db/mysql/models');

const create = (values, options = {}) => User.create(values, options);

module.exports = {
  create,
};
