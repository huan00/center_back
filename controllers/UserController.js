const { User, UserFollower } = require('../models') //import the model
// const middleware = require('../middleware')

const signUp = async (req, res) => {
  try {
    const signUpData = req.body
    const user = await User.create(signUpData)
    if (user) {
      return res.send(user)
    }
    res.status(400).send('User not created. check info')
  } catch (error) {
    throw error
  }
}

const followUser = async (req, res) => {
  try {
    const userId = req.params.id
    const { followerId } = req.body

    const userFollowing = await UserFollower.create({
      userId: userId,
      followerId: followerId
    })
    if (userFollowing) {
      return res.status(201).send(userFollowing)
    }
    res.status(400).send({ msg: 'Check entry info.' })
  } catch (error) {
    throw error
  }
}

const getUserFollowing = async (req, res) => {
  try {
    console.log('reached')
    const userId = req.params.id
    const userFollowing = await User.findAll({
      include: [
        {
          model: User,
          as: 'following'
          // through: { attributes: [] }
        }
      ]
    })
    if (userFollowing) {
      return res.status(200).send(userFollowing)
    }
    res.status(204).send({ msg: 'nothing found' })
  } catch (error) {
    throw error
  }
}

module.exports = { signUp, followUser, getUserFollowing }
