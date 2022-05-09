'use strict'

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('moods', [
      { mood: 'sad', createdAt: new Date(), updatedAt: new Date() },
      { createdAt: new Date(), updatedAt: new Date(), mood: 'happy' },
      { createdAt: new Date(), updatedAt: new Date(), mood: 'angry' },
      { createdAt: new Date(), updatedAt: new Date(), mood: 'nervous' },
      { createdAt: new Date(), updatedAt: new Date(), mood: 'loved' },
      { createdAt: new Date(), updatedAt: new Date(), mood: 'anxious' }
    ])
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('moods', null)
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
}
