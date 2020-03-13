const Sequelize = require('../sequalize');

const User = require('./user');

const models = [
  User,
];

const initializedModels = Sequelize.initModels(models);

module.exports = initializedModels;
