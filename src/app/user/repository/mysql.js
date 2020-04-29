const Sequelize = require('sequelize');

const { User } = require('../../../db/mysql/models');

const create = (values, options = {}) => User.create(values, options);

const getOne = (params = {}, options = {}) => User.findOne({ where: params, ...options });

const userExists = (email, phone) => getOne({ [Sequelize.Op.or]: [{ email }, { phone }] });

const findById = id => User.findByPk(id);

const list = (params = {}, order = [['createdAt', 'DESC']]) => User.findAll({ where: params, order });

const update = (values, where = {}, options = {}) => User.update(values, { where, ...options });

const updateById = async (values, id) => {
  await update(values, { id });
  const updatedUser = await findById(id);
  return updatedUser;
};

const removeById = id => User.destroy({ where: { id } });


module.exports = {
  create,
  userExists,
  findById,
  getOne,
  list,
  update,
  updateById,
  removeById,
};
