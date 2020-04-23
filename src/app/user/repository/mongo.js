const User = require('../../../db/mongo/models');

const create = values => User.create(values);

module.exports = {
  create,
};
