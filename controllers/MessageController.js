const { Message, MessageCategory, Category, Rating } = require('../models')
const rating = require('../models/rating')

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

const messageCategory = async (req, res) => {
  try {
    const messageId = req.params.id
    const categoryId = req.body.categoryId

    const messageCate = await MessageCategory.create({
      messagesId: messageId,
      categoriesId: categoryId
    })

    if (messageCate) {
      return res.status(201).send(messageCate)
    }
    res.status(401).send({ msg: 'Check message content' })
  } catch (error) {
    throw error
  }
}

const getMessageCategory = async (req, res) => {
  try {
    const id = req.params.id
    const messageCate = await Message.findAll({
      where: { id: id },
      include: [
        { model: Category, as: 'messageCate', attributes: ['category'] }
      ]
    })
    if (messageCate) {
      return res.status(200).send(messageCate)
    }
    res.status(201).send({ mgs: 'nothing found' })
  } catch (error) {
    throw error
  }
}

const getMsgRateCate = async (req, res) => {
  try {
    const id = req.params.id

    const msg = await Message.findOne({
      where: { id: id },
      include: [
        { model: Category, as: 'messageCate', atrributes: ['category'] },
        { model: Rating, attributes: ['rating'] }
      ]
    })
    if (msg) {
      return res.status(200).json(msg)
    }
    res.status(400).send({ msg: 'Nothing found' })
  } catch (error) {
    throw error
  }
}

module.exports = {
  newMessage,
  messageCategory,
  getMessageCategory,
  getMsgRateCate
}
