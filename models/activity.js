'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Activity extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Activity.belongsTo(models.User, { foreignKey: 'userId' })
    }
  }
  Activity.init(
    {
      Activity: DataTypes.STRING,
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
      modelName: 'Activity',
      tableName: 'activities'
    }
  )
  return Activity
}
