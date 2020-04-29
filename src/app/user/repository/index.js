const mongoRepo = require('./mongo');
const mysqlRepo = require('./mysql');

module.exports = {
  mongo: mongoRepo,
  mysql: mysqlRepo,
};
