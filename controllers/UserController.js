const middleware = require('../middleware')
const {
  User,
  UserFollower,
  Message,
  FollowMessage,
  UserMood,
  Mood,
  Survey
} = require('../models') //import the model

//Auth
const signUp = async (req, res) => {
  try {
    let { email, password, firstName, lastName } = req.body
    console.log(email, firstName, lastName, password)
    password = await middleware.hashPassword(password)
    const user = await User.create({
      email,
      password,
      firstName,
      lastName
    })
    if (user) {
      return res.send(user)
    }
    res.status(400).send('User not created. check info')
  } catch (error) {
    throw error
  }
}

const login = async (req, res) => {
  try {
    const { email, password } = req.body
    const user = await User.findOne({ where: { email: email }, raw: true })
    if (user && middleware.comparePassword(user.password, password)) {
      let payload = {
        id: user.id,
        email: user.email
      }
      let token = middleware.createToken(payload)
      return res.send({ user: payload, token })
    }
    res.status(401).send({ status: 'Error', msg: 'Unauthorized' })
  } catch (error) {
    throw error
  }
}

const CheckSession = async (req, res) => {
  const { payload } = res.locals
  console.log(payload)
  res.send(payload)
}

const followMessage = async (req, res) => {
  try {
    const userId = req.params.id
    const msgId = req.body.messageId

    const followMessage = await FollowMessage.create({
      userId: userId,
      messageAdviseId: msgId
    })
    if (followMessage) {
      return res.status(201).json(followMessage)
    }
    res.status(400).send({ msg: 'Error, check content' })
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

const createMood = async (req, res) => {
  try {
    const userId = req.params.id
    const mood = req.body.moodId

    const userMood = await UserMood.create({ userId: userId, moodId: mood })

    if (userMood) {
      return res.status(201).json(userMood)
    }
    res.status(400).send({ Msg: 'Check content' })
  } catch (error) {
    throw error
  }
}

////////Get////////

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

const getUserDetail = async (req, res) => {
  try {
    const userId = req.params.id

    const userDetail = await User.findOne({
      where: { id: userId },
      include: [
        {
          model: Mood,
          as: 'userMood',
          though: { attributes: ['mood'] }
        },
        {
          model: Message,
          attrubites: ['message']
        },
        {
          model: Survey,
          attrubites: []
        },
        {
          model: User,
          as: 'following',
          though: { attributes: [] }
        },
        { model: Message, as: 'followMsg', attributes: ['message'] }
      ]
    })
    if (userDetail) {
      return res.status(200).json(userDetail)
    }
    res.status(204).send({ Msg: 'No content' })
  } catch (error) {
    throw error
  }
}

module.exports = {
  signUp,
  login,
  CheckSession,
  followUser,
  getUserFollowing,
  getUserMessage,
  getUserDetail,
  followMessage,
  createMood
}
