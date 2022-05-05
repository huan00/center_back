const { User } = require('../models') //import the model
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

module.exports = { signUp }
