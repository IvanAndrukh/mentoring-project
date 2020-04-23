const repository = require('./repository');

const create = async (dbType, userData) => {
  try {
    const userRepository = repository[dbType];

    const newUser = await userRepository.create(userData);
    return newUser;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  create,
};
