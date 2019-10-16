'use strict';
module.exports = (sequelize, DataTypes) => {
  const pages = sequelize.define('pages', {
    episodeId: DataTypes.INTEGER,
    image: DataTypes.STRING,
    page: DataTypes.STRING
  }, {});
  pages.associate = function(models) {    
    pages.belongsTo(models.episodes, {
      as : 'detail_Id',
      foreignKey : 'episodeId'
    })
  };
  return pages;
};