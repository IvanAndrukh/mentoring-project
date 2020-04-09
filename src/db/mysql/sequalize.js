const Sequelize = require('sequelize');

const config = require('../../config');

const { mysqlHost, mysqlUser, mysqlPassword, mysqlDatabase } = config.get('mysql');

class SequelizeConnection {
  constructor() {
    this.sequelize = new Sequelize(mysqlDatabase, mysqlUser, mysqlPassword, {
      host: mysqlHost,
      dialect: 'mysql',
    });
  }

  connect() {
    this.sequelize.authenticate()
      .then(() => console.log('Successfully connected to  MySQL DB'))
      .catch(err => console.log('Failed connecting to MySQL DB', err));
  }

  initModels(models) {
    // return models.map(initModel => initModel(this.sequelize, Sequelize));
    return models.reduce((acc, model) => {
      acc.modle = model(this.sequelize, Sequelize);
      return acc;
    }, {});
  }
}

module.exports = new SequelizeConnection();
