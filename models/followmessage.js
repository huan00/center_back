'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class FollowMessage extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  FollowMessage.init(
    {
      userId: {
        type: DataTypes.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'users',
          key: 'id'
        }
      },
      messageAdviseId: {
        type: DataTypes.INTEGER,
        onDelete: 'CASCADE',
        references: { model: 'messages', key: 'id' }
      }
    },
    {
      sequelize,
      modelName: 'FollowMessage',
      tableName: 'follow_messages'
    }
  )
  return FollowMessage
}
