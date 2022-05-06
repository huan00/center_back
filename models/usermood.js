'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class UserMood extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  UserMood.init(
    {
      userId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'users',
          key: 'id'
        }
      },
      moodId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'categories',
          key: 'id'
        }
      }
    },
    {
      sequelize,
      modelName: 'UserMood',
      tableName: 'user_moods'
    }
  )
  return UserMood
}
