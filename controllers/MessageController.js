const { Message } = require('../models')

const newMessage = async (req, res) => {
  try {
    const newMsgData = req.body
    const newMsg = await Message.create(newMsgData)
    if (newMsg) {
      return res.send(newMsg)
    }
    res.status(400).send('Message not created, check entry')
  } catch (error) {
    throw error
  }
}

module.exports = { newMessage }
