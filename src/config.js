const secureEnv = require('secure-env');

const env = process.env.NODE_ENV || 'development';
const envConfig = secureEnv({ secret: process.env.PROJECT_ENV_KEY });
const { MYSQL_PASS } = envConfig;

const config = {
  development: {
    mongoDbUrl: 'mongodb://127.0.0.1:27017,127.0.0.1:27018,127.0.0.1:27019/nosql-db',
    mysqlPass: MYSQL_PASS,
  },
  test: { },
};


module.exports = config[env];
