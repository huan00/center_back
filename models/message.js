'use strict'
const { Model, INTEGER } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Message extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Message.hasMany(models.Rating, { foreignKey: 'messageId' })

      Message.belongsTo(models.User, { foreignKey: 'userId' })

      Message.belongsToMany(models.User, {
        as: 'messageAdvise',
        foreignKey: 'messageAdviseId',
        through: models.FollowMessage
      })

      Message.belongsToMany(models.Mood, {
        foreignKey: 'messageId',
        as: 'messageMood',
        through: models.MessageMood
      })

      Message.belongsToMany(models.Message, {
        foreignKey: 'messageId',
        as: 'commentMsg',
        through: models.MessageToMessage
      })
      Message.belongsToMany(models.Message, {
        foreignKey: 'commentId',
        as: 'postMsg',
        through: models.MessageToMessage
      })
    }
  }
  Message.init(
    {
      message: { type: DataTypes.STRING, allowNull: false },
      private: { type: DataTypes.BOOLEAN, allowNull: false },
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        onDelete: 'CASCADE',
        references: {
          model: 'users',
          key: 'id'
        }
      }
    },
    {
      sequelize,
      modelName: 'Message',
      tableName: 'messages'
    }
  )
  return Message
}
