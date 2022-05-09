'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Mood extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Mood.belongsToMany(models.Message, {
        foreignKey: 'moodId',
        as: 'moodMsg',
        through: models.MessageMood
      })
      Mood.belongsToMany(models.User, {
        foreignKey: 'moodId',
        as: 'emotion',
        through: models.UserMood
      })
      Mood.hasOne(models.Survey, { foreignKey: 'moodId' })
    }
  }
  Mood.init(
    {
      mood: { type: DataTypes.STRING, allowNull: false }
    },
    {
      sequelize,
      modelName: 'Mood',
      tableName: 'moods'
    }
  )
  return Mood
}
