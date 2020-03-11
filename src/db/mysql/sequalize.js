const Sequelize = require('sequelize');

const { mysqlPass } = require('../../config');
const models = require('./models');

class SequelizeConnection {
  constructor() {
    this.sequelize = new Sequelize('sqlDb', 'root', mysqlPass, {
      host: 'localhost',
      dialect: 'mysql',
    });
  }

  connect() {
    this.sequelize.authenticate()
      .then(() => console.log('Successfully connected to  MySQL DB'))
      .catch(err => console.log('Failed connecting to MySQL DB', err));
  }

  initModels() {
    Object.values(models).forEach(initModel => initModel(this.sequelize, Sequelize));
  }
}

module.exports = new SequelizeConnection();
