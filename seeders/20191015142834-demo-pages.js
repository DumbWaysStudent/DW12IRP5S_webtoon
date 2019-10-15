'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert('pages', [
      {
        episodeId : 1,
        image : "https://cdn.idntimes.com/content-images/community/2019/03/opera-snapshot-2019-03-13-211947-wwwwebtoonscom-0f5ff5e345298954bf286ad981cd4c9c_600x400.png",
        page :  1
      },
      {
        episodeId : 2,
        image : "https://cdn.idntimes.com/content-images/community/2019/03/6d0a9079a454d64fc74322862c0de1ed-66a00b52de00ef98aae34bee81593598_600x400.jpg",
        page :  2
      },
      {
        episodeId : 3,
        image : "https://cdn.idntimes.com/content-images/community/2019/03/6d0a9079a454d64fc74322862c0de1ed-66a00b52de00ef98aae34bee81593598_600x400.jpg",
        page :  3
      },
      {
        episodeId : 4,
        image : "https://cdn.idntimes.com/content-images/community/2019/03/6d0a9079a454d64fc74322862c0de1ed-66a00b52de00ef98aae34bee81593598_600x400.jpg",
        page :  4
      },

    ], {});
 
  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.bulkDelete('pages', null, {});

  }
};
