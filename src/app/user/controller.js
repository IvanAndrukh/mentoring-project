const userService = require('./service');

const create = (req) => {
  const {
    name,
    surname,
    email,
    birthday,
    phone,
  } = req.body;
  const dbType = req.params.db;

  return userService.create(dbType, {
    name,
    surname,
    email,
    birthday,
    phone,
  });
};

const get = (req) => {
  const { db, id } = req.params.db;

  return userService.get(db, id);
};

module.exports = {
  create,
  get,
};
