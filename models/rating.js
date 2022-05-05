'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Rating extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Rating.belongsTo(models.Message, { foreignKey: 'messagesId' })
    }
  }
  Rating.init(
    {
      rating: { type: DataTypes.INTEGER, allowNull: false },
      messagesId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'messages',
          key: 'id'
        }
      }
    },
    {
      sequelize,
      modelName: 'Rating',
      tableName: 'ratings'
    }
  )
  return Rating
}
