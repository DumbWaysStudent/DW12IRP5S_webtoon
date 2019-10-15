'use strict';
module.exports = (sequelize, DataTypes) => {
  const pages = sequelize.define('pages', {
    episodeId: DataTypes.INTEGER,
    image: DataTypes.STRING,
    page: DataTypes.STRING
  }, {});
  pages.associate = function(models) {
    // associations can be defined here
  };
  return pages;
};