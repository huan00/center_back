'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class MessageCategory extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  MessageCategory.init(
    {
      messagesId: DataTypes.INTEGER,
      categoriesId: DataTypes.INTEGER
    },
    {
      sequelize,
      modelName: 'MessageCategory',
      tableName: 'message_categories'
    }
  )
  return MessageCategory
}
