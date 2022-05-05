'use strict'
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('message_categories', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      messagesId: {
        type: Sequelize.INTEGER
      },
      categoriesId: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    })
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('message_categories')
  }
}
