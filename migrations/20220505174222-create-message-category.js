'use strict'
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('message_moods', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      messagesId: {
        type: Sequelize.INTEGER
      },
      moodsId: {
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
    await queryInterface.dropTable('message_moods')
  }
}
