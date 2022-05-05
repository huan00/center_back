'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Message extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Message.belongsTo(models.User, { foreignKey: 'userId' })

      Message.belongsToMany(models.User, {
        as: 'messageAdvise',
        foreignKey: 'messageAdviseId',
        through: models.FollowMessage
      })

      Message.hasMany(models.Rating, { foreignKey: 'messageId' })
      Message.hasMany(models.Category, { foreignKey: 'messageId' })
    }
  }
  Message.init(
    {
      message: DataTypes.STRING,
      userId: {
        type: DataTypes.INTEGER,
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
