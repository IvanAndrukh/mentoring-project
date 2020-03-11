const sequalize = require('./sequalize');

module.exports = {
  init: () => {
    sequalize.connect();
    sequalize.initModels();
  },
};
