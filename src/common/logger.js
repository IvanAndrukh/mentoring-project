const winston = require('winston');

const {
  combine,
  timestamp,
  printf,
} = winston.format;

const LOG_LEVELS = Object.freeze({
  ERROR: 'error',
  INFO: 'info',
  WARN: 'warn',
  DEBUG: 'debug',
});

class Logger {
  constructor(logLevel = LOG_LEVELS.DEBUG) {
    this.logger = winston.createLogger({
      exitOnError: false,
      level: logLevel,
      transports: [
        new winston.transports.Console({
          format: combine(
            timestamp(),
            printf(info => `${info.timestamp} ${info.level.toUpperCase()}: ${info.message}`),
          ),
        }),
      ],
    });
  }

  debug(message) {
    this.logger.log({ level: LOG_LEVELS.DEBUG, message });
  }

  info(message) {
    this.logger.log({ level: LOG_LEVELS.INFO, message });
  }

  error(message) {
    this.logger.log({ level: LOG_LEVELS.ERROR, message });
  }

  warn(message) {
    this.logger.log({ level: LOG_LEVELS.WARN, message });
  }
}

module.exports = new Logger();
