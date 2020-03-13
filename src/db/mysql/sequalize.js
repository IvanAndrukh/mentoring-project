const Sequelize = require('sequelize');

const { mysqlPass } = require('../../config');

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

  initModels(models) {
    return models.map(initModel => initModel(this.sequelize, Sequelize));
  }
}

module.exports = new SequelizeConnection();
