'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('user', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
  },
    email: {
      type: DataTypes.STRING,
      allowNull: false
  },
    password: {
      type: DataTypes.STRING,
      allowNull: false
  }
  }, {});
  User.associate = function(models) {
    // User.hasMany(models.Recipe, {
    //   foreignKey: 'userId'
    // });
    User.hasMany(models.Recipe, {
      foreignKey: 'userId',
      as: 'recipes'
    })
  };
  return User;
};