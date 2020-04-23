const userService = require('./service');

const create = async (req, res, next) => {
  try {
    const {
      name,
      surname,
      email,
      birthday,
      phone,
    } = req.body;
    const dbType = req.params.db;

    const newUser = await userService.create(dbType, {
      name,
      surname,
      email,
      birthday,
      phone,
    });

    return res.status(200).send(newUser);
  } catch (error) {
    return next(error);
  }
};

module.exports = {
  create,
};
