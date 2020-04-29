const Sequelize = require('sequelize');

const logger = require('../../common/logger');
const config = require('../../config');

const {
  mysqlHost,
  mysqlUser,
  mysqlPassword,
  mysqlDatabase,
} = config.get('mysql');

class SequelizeConnection {
  constructor() {
    this.sequelize = new Sequelize(mysqlDatabase, mysqlUser, mysqlPassword, {
      host: mysqlHost,
      dialect: 'mysql',
      logging: false,
    });
  }

  connect() {
    this.sequelize.authenticate()
      .then(() => logger.info('Successfully connected to  MySQL'))
      .catch(err => logger.err(`Failed connecting to MySQL: ${err}`));
  }

  initModels(models) {
    return Object.keys(models).reduce((acc, modelName) => {
      acc[modelName] = models[modelName](this.sequelize, Sequelize);
      return acc;
    }, {});
  }
}

module.exports = new SequelizeConnection();
