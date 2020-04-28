const responseWarapper = require('../../common/responseWrapper');

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

const update = req => {
  const {
    name,
    surname,
    email,
    birthday,
    phone,
    userRole,
  } = req.body;
  const { db, id } = req.params;

  return userService.updateById(db)({// TODO: add correct email and phone update
    name,
    surname,
    email,
    birthday,
    userRole,
    phone,
  }, id);
};

const remove = async req => {
  const { db, id } = req.params;
  await userService.remove(db)(id);
  return {};
};


module.exports = {
  create: responseWarapper(create, 201),
  get: responseWarapper(get),
  list: responseWarapper(list),
  update: responseWarapper(update),
  remove: responseWarapper(remove),
};
