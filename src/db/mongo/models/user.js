const { Schema, model } = require('mongoose');

const { USER_ROLES } = require('../../../constants');

const userSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: true,
  },
  surname: {
    type: String,
    trim: true,
    required: true,
  },
  birthday: {
    type: Date,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  userRole: {
    type: String,
    trim: true,
    set: role => role.toLowerCase(),
    enum: Object.values(USER_ROLES),
    required: true,
  },
  updatedAtAt: {
    type: Date,
    default: Date.now(),
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = model('User', userSchema);
