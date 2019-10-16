'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   
      return queryInterface.bulkInsert('episodes', [{
        titleId : 1,
        episode : "episode 1",
        image : "https://cdn.idntimes.com/content-images/community/2019/03/opera-snapshot-2019-03-13-211947-wwwwebtoonscom-0f5ff5e345298954bf286ad981cd4c9c_600x400.png"
      },
      {
        titleId : 2,
        episode : "episode 2",
        image : "https://cdn.idntimes.com/content-images/community/2019/03/6d0a9079a454d64fc74322862c0de1ed-66a00b52de00ef98aae34bee81593598_600x400.jpg"
      },
      {
        titleId : 3,
        episode : "episode 3",
        image : "https://cdn.idntimes.com/content-images/community/2019/03/6d0a9079a454d64fc74322862c0de1ed-66a00b52de00ef98aae34bee81593598_600x400.jpg"
      },
      {
        titleId : 4,
        episode : "episode 3",
        image : "https://66.media.tumblr.com/7973d478696a54d5220025dd8058040d/tumblr_peo7iir2Ra1rkxh0o_540.png"
      }
    ], {});
 
  },

  down: (queryInterface, Sequelize) => {

      Example:
      return queryInterface.bulkDelete('episodes', null, {});
  
  }
};
