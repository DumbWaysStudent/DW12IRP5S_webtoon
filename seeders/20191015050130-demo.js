'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert('foryous', [
      {
        title : 'The Secret Angel',
        genre : 'Romance',
        isFavourite : true,
        image : 'https://cdn.idntimes.com/content-images/community/2019/03/opera-snapshot-2019-03-13-211947-wwwwebtoonscom-0f5ff5e345298954bf286ad981cd4c9c_600x400.png',
        createdBy : 8
      },
      {
        title : 'Pasturi Gaje',
        genre : 'Comedy',
        isFavourite : true,
        image : 'https://cdn.idntimes.com/content-images/community/2019/03/6d0a9079a454d64fc74322862c0de1ed-66a00b52de00ef98aae34bee81593598_600x400.jpg',
        createdBy : 8
      },
      {
        title : 'Young Mom',
        genre : 'Drama',
        isFavourite : false,
        image : 'https://cdn.idntimes.com/content-images/community/2019/03/6d0a9079a454d64fc74322862c0de1ed-66a00b52de00ef98aae34bee81593598_600x400.jpg',
        createdBy : 8
      },
      {
        title : 'Crazy Sister',
        genre : 'Drama',
        isFavourite : true,
        image : 'https://66.media.tumblr.com/7973d478696a54d5220025dd8058040d/tumblr_peo7iir2Ra1rkxh0o_540.png',
        createdBy : 9
      }
    ], {});
  
  },

  down: (queryInterface, Sequelize) => {
   
      return queryInterface.bulkDelete('foryous', null, {});

  }
};
