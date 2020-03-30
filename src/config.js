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
});


module.exports = config;
