const userRepository = require('./repository');

const create = async (userData) => {
  try {
    const newUser = await userRepository.create(userData);
    return newUser;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  create,
};
