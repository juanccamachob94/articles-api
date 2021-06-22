'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert(
      'Articles',
      [
        {
          id: 1,
          title: 'Test 1',
          content: 'Description 1',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 2,
          title: 'Test 2',
          content: 'Description 2',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 3,
          title: 'Test 3',
          content: 'Description 3',
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     await queryInterface.bulkDelete('Articles', null, {});
  }
};
