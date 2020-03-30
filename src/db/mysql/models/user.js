module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      field: 'id',
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'name',
    },
    surname: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'surname',
    },
    birthday: {
      type: DataTypes.DATE,
      allowNull: false,
      field: 'age',
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'email',
      validate: {
        isEmail: true,
      },
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'phone',
    },
  });

  User.associate = (models) => {
    models.User.hasMany(models.Task);
  };

  return User;
};
