'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class MessageToMessage extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  MessageToMessage.init(
    {
      messageId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'messages',
          key: 'id'
        }
      },
      commentId: {
        type: DataTypes.INTEGER,
        references: { model: 'messages', key: 'id' }
      }
    },
    {
      sequelize,
      modelName: 'MessageToMessage',
      tableName: 'message_to_messages'
    }
  )
  return MessageToMessage
}
