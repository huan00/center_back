'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.Message, { foreignKey: 'userId' })

      User.belongsToMany(models.User, {
        as: 'following',
        through: models.UserFollower,
        foreignKey: 'userId'
      })

      User.belongsToMany(models.User, {
        as: 'followers',
        through: models.UserFollower,
        foreignKey: 'followerId'
      })

      User.belongsToMany(models.Message, {
        as: 'followMsg',
        through: models.FollowMessage,
        foreignKey: 'userId'
      })

      User.belongsToMany(models.Category, {
        foreignKey: 'userId',
        as: 'userMood',
        through: models.UserMood
      })
    }
  }
  User.init(
    {
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING
    },
    {
      sequelize,
      modelName: 'User',
      tableName: 'users'
    }
  )
  return User
}
