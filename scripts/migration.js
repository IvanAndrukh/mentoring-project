const fs = require('fs');
const path = require('path');
const yargs = require('yargs');
const dotenv = require('dotenv');
const Umzug = require('umzug');
const Sequelize = require('sequelize');
const config = require('../src/config');


const getSequelize = () => {
  const {
    mysqlHost,
    mysqlUser,
    mysqlPassword,
    mysqlDatabase,
  } = config.get('mysql');

  return new Sequelize(mysqlDatabase, mysqlUser, mysqlPassword, { host: mysqlHost, dialect: 'mysql' });
};

const createMigrationFile = async (name) => {
  const prependZero = x => (x >= 10 ? x : `0${x}`);

  const formatDate = date => [
    date.getFullYear(),
    date.getMonth() + 1,
    date.getDate(),
    date.getHours(),
    date.getMinutes(),
    date.getSeconds(),
  ]
    .map(prependZero)
    .join('');

  const writeFile = (path, data) => new Promise((resolve, reject) => fs.writeFile(path, data, (err, res) => {
    if (err) return reject(err);
    resolve(res);
  }));

  const prefix = formatDate(new Date());
  const filename = `${prefix}-${name}`;
  const file = path.resolve(__dirname, '../', `${filename}.js`);

  logger.info('going to create migration file:');
  logger.info(file);
  const migrationContent = `const up = async (queryInterface, Sequelize) => {

}

const down = async (queryInterface, Sequelize) => {

}
module.exports = {up, down};
`;

  try {
    await writeFile(file, migrationContent);
    logger.info('migration files successfully created');
  } catch (err) {
    logger.error('Error creating migration file', err);
  }
};

const getUmzug = sequelize => new Umzug({
  storage: 'sequelize',
  storageOptions: {
    sequelize,
    tableName: 'migrations',
  },
  migrations: {
    params: [sequelize.getQueryInterface(), sequelize.Sequelize],
    pattern: /\d+[\w-]+\.js$/,
    path: path.resolve(__dirname, '../migrations'),
  },
});
