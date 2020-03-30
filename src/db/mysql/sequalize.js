const Sequelize = require('sequelize');

const config = require('../../config');

const { mysqlUser, mysqlPassword, mysqlDatabase } = config.get('mysql');

class SequelizeConnection {
  constructor() {
    this.sequelize = new Sequelize(mysqlDatabase, mysqlUser, mysqlPassword, {
      host: 'localhost',
      dialect: 'mysql',
    });
  }

  connect() {
    this.sequelize.authenticate()
      .then(() => console.log('Successfully connected to  MySQL DB'))
      .catch(err => console.log('Failed connecting to MySQL DB', err));
  }

  initModels(models) {
    return models.map(initModel => initModel(this.sequelize, Sequelize));
  }
}

module.exports = new SequelizeConnection();
