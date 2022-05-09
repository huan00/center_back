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
      User.hasMany(models.Survey, { foreignKey: 'userId' })

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

      User.belongsToMany(models.Mood, {
        foreignKey: 'userId',
        as: 'userMood',
        through: models.UserMood
      })
    }
  }
  User.init(
    {
      email: { type: DataTypes.STRING, allowNull: false },
      password: { type: DataTypes.STRING, allowNull: false },
      firstName: { type: DataTypes.STRING, allowNull: false },
      lastName: { type: DataTypes.STRING, allowNull: false }
    },
    {
      sequelize,
      modelName: 'User',
      tableName: 'users'
    }
  )
  return User
}
