'use strict';
module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define('user', {
    email: DataTypes.STRING,
    password: DataTypes.STRING
  }, {});
  user.associate = function(models) {
    // associations can be defined here
    // user.belongsToMany(models.foryou, {
    //   as : 'userId',
    //   foreignKey : 'id'
    // })
  };
  return user;
};