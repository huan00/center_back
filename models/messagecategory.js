'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class MessageMood extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  MessageMood.init(
    {
      messageId: DataTypes.INTEGER,
      moodId: DataTypes.INTEGER
    },
    {
      sequelize,
      modelName: 'MessageMood',
      tableName: 'message_moods'
    }
  )
  return MessageMood
}
