'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Survey extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Survey.belongsTo(models.User, { foreignKey: 'userId' })
      Survey.belongsTo(models.Mood, { foreignKey: 'moodId' })
    }
  }
  Survey.init(
    {
      question: { type: DataTypes.STRING, allowNull: false },
      answer: { type: DataTypes.STRING },
      moodId: {
        type: DataTypes.STRING,
        references: {
          model: 'moods',
          key: 'id'
        }
      },
      reason: { type: DataTypes.STRING },
      userId: {
        type: DataTypes.STRING,
        references: {
          model: 'users',
          key: 'id'
        }
      }
    },
    {
      sequelize,
      modelName: 'Survey',
      tableName: 'surveys'
    }
  )
  return Survey
}
