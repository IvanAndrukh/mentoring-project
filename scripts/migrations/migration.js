/* eslint-disable consistent-return */
const path = require('path');
const Umzug = require('umzug');
const Sequelize = require('sequelize');

const config = require('../../src/config');
const logger = require('../../src/common/logger');

const getSequelize = () => {
  const {
    mysqlHost,
    mysqlUser,
    mysqlPassword,
    mysqlDatabase,
  } = config.get('mysql');

  return new Sequelize(mysqlDatabase, mysqlUser, mysqlPassword, { host: mysqlHost, dialect: 'mysql' });
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
    path: path.resolve(__dirname, '../../src/db/mysql/migrations'),
  },
});

const runUpMigrations = async () => {
  const sequelize = getSequelize();
  const umzug = getUmzug(sequelize);

  logger.info('Test MYSQL DB connection');
  try {
    await sequelize.authenticate();
  } catch (err) {
    logger.error(`Error connecting to MYSQL DB: ${err}`);
    throw err;
  }

  logger.info('Determining pending migrations');

  const pendingMigrations = await umzug.pending();
  if (!pendingMigrations.length) {
    logger.info('No pending migrations');
    sequelize.close();
  }

  logger.info('Pending migrations: ');
  logger.info(pendingMigrations.map(m => m.path).join('\n'));
  try {
    const executedMigrations = await umzug.up();

    if (!executedMigrations.length) {
      logger.info('No migrations executed');
    } else {
      logger.info('Executed migrations:');
      logger.info(executedMigrations.map(m => m.file).join('\n'));
    }

    await sequelize.close();
  } catch (err) {
    logger.error(`Error running UP migrations: ${err}`);
    throw err;
  }
};

const runDownMigrations = async () => {
  const sequelize = getSequelize();
  const umzug = getUmzug(sequelize);
  logger.info('Test MYSQL DB connection');

  try {
    await sequelize.authenticate();
  } catch (err) {
    logger.error(`Error connecting to MYSQL DB: ${err}`);
    throw err;
  }

  try {
    const executedMigrations = await umzug.down();
    if (!executedMigrations.length) {
      logger.info('No migrations executed');
    } else {
      logger.info('Executed migrations:');
      logger.info(executedMigrations.map(m => m.file).join('\n'));
    }
    await sequelize.close();
  } catch (err) {
    logger.error(`Error running DOWN migrations: ${err}`);
    throw err;
  }
};

module.exports = {
  up: runUpMigrations,
  down: runDownMigrations,
};
