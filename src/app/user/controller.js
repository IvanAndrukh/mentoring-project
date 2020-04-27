const userService = require('./service');

const create = req => {
  const {
    name,
    surname,
    email,
    birthday,
    userRole,
    phone,
  } = req.body;
  const { db } = req.params;

  return userService.create(db)({
    name,
    surname,
    email,
    birthday,
    userRole,
    phone,
  });
};

const get = req => {
  const { db, id } = req.params;

  return userService.get(db)(id);
};

const list = req => {
  const { db, ...filter } = req.params;

  return userService.list(db)(filter);
};


module.exports = {
  create,
  get,
  list,
};
