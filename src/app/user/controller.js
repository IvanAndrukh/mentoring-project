const userService = require('./service');

const create = async (req, res, next) => {
  try {
    const user = req.body;
    const newUser = await userService.create(user);

    return res.status(200).send(newUser);
  } catch (error) {
    return next(error);
  }
};

module.exports = {
  create,
};
