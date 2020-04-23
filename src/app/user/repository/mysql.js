const Sequelize = require('sequelize');

const { User } = require('../../../db/mysql/models');

const create = (values, options = {}) => User.create(values, options);

const userExists = (email, phone) => User.findOne({
  where: { [Sequelize.Op.or]: [{ email }, { phone }] },
});

module.exports = {
  create,
  userExists,
};
