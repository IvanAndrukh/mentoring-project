const dotenv = require('dotenv');
const convict = require('convict');

dotenv.config();

const config = convict({
  env: {
    doc: 'Execution environment',
    format: ['production', 'development', 'test'],
    default: 'development',
    arg: 'nodeEnv',
    env: 'NODE_ENV',
  },
  mysql: {
    mysqlHost: {
      doc: 'mysql db host',
      format: String,
      default: 'localhost',
      arg: 'mysqlHost',
      env: 'MYSQL_HOST',
    },
    mysqlUser: {
      doc: 'mysql db username',
      format: String,
      default: 'admin',
      arg: 'mysqlUser',
      env: 'MYSQL_USER',
    },
    mysqlPassword: {
      doc: 'mysql db password',
      format: String,
      sensitive: true,
      default: 'pass',
      arg: 'mysqlPassword',
      env: 'MYSQL_PASSWORD',
    },
    mysqlRootPassword: {
      doc: 'mysql db root password',
      format: String,
      sensitive: true,
      default: 'pass',
      arg: 'mysqlRootPassword',
      env: 'MYSQL_ROOT_PASSWORD',
    },
    mysqlDatabase: {
      doc: 'mysql database',
      format: String,
      default: 'kg',
      arg: 'mysqlDatabase',
      env: 'MYSQL_DATABASE',
    },
  },
  mongo: {
    mongoHost: {
      doc: 'mongo db host',
      format: String,
      default: 'localhost',
      arg: 'mongoHost',
      env: 'DB_HOST',
    },
    mongoPort: {
      doc: 'mongo db port',
      format: String,
      default: 'localhost',
      arg: 'mongoPort',
      env: 'DB_PORT',
    },
    mongoName: {
      doc: 'mongo db name',
      format: String,
      default: 'kindergarten',
      arg: 'mongoName',
      env: 'dbName',
    },
  },
});


module.exports = config;
