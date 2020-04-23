const repository = require('./repository');

const create = async (dbType, userData) => {
  const userRepository = repository[dbType];

  return userRepository.create(userData);
};

module.exports = {
  create,
};
