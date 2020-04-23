const mongoose = require('mongoose');

const logger = require('../../common/logger');
const config = require('../../config');

const { mongoHost, mongoName, mongoPort } = config.get('mongo');

module.exports = {
  connect: () => {
    mongoose.connect(`mongodb://${mongoHost}:${mongoPort}/${mongoName}`, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
    });

    const dbConnection = mongoose.connection;
    dbConnection.on('error', err => logger.error(`Error connection to Mongo: ${err}`));
    dbConnection.once('open', () => logger.info('Successfully connected to Mongo'));
  },
};
