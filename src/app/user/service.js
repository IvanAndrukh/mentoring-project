const userRepositories = require('./repository');

const create = db => async userData => {
  const repository = userRepositories[db];
  const newUser = await repository.create(userData);

  return newUser;
};

const get = db => async id => {
  const repository = userRepositories[db];
  const user = await repository.findById(id);

  return user;
};

const list = db => async (filter = {}) => {
  const repository = userRepositories[db];
  const users = await repository.list(filter);

  return users;
};

module.exports = {
  create,
  get,
  list,
};
