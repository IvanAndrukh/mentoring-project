const repository = require('./repository');

const create = (db, userData) => {
  const userRepository = repository[db];
  const newUser = userRepository.create(userData);
  return newUser;
};

const get = (db, id) => {
  const userRepository = repository[db];
  const user = userRepository.findById(id);
  return user;
};

module.exports = {
  create,
  get,
};
