'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   
      return queryInterface.bulkInsert('users', [
      {
        email : 'rifqirizaldi@gmail.com',
        password : 'rifqi'
      },
      {
        email : 'Godokkasa@gmail.com',
        password : 'godok'
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
   
      return queryInterface.bulkDelete('users', null, {});
    
  }
};
