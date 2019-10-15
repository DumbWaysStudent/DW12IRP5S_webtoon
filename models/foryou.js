'use strict';
module.exports = (sequelize, DataTypes) => {
  const foryou = sequelize.define('foryou', {
    title: DataTypes.STRING,
    genre: DataTypes.STRING,
    isFavourite: DataTypes.BOOLEAN,
    image: DataTypes.STRING,
    createdBy: DataTypes.INTEGER
  }, {});
  foryou.associate = function(models) {
    // associations can be defined here
    foryou.belongsTo(models.user, {
      as : 'created_By',
      foreignKey : 'createdBy'
    })
  };
  return foryou;
};