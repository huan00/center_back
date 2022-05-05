const { User, UserFollower, Message } = require('../models') //import the model
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

////////Get////////

const getUserMessage = async (req, res) => {
  try {
    const userId = req.params.id

    const userMsg = await User.findOne({
      where: { id: userId },
      include: [{ model: Message, attrubites: ['message'] }]
    })
    if (userMsg) {
      if (userMsg) {
        return res.status(200).json(userMsg)
      }
    }
    res.status(204).send({ msg: 'No content' })
  } catch (error) {
    throw error
  }
}

const getFollowUser = async (req, res) => {
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

module.exports = { signUp, getFollowUser, getUserFollowing, getUserMessage }
