'use strict';

/** @type {import('sequelize-cli').Migration} */


module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Recipes', [
      {
        title: 'Recipe 1',
        description: 'Description for Recipe 1',
        ingredients: 'Ingredients for Recipe 1',
        instructions: 'Instructions for Recipe 1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Recipe 2',
        description: 'Description for Recipe 2',
        ingredients: 'Ingredients for Recipe 2',
        instructions: 'Instructions for Recipe 2',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Recipes', null, {});
  },
};
