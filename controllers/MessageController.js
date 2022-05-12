const {
  Message,
  MessageMood,
  Mood,
  Rating,
  User,
  MessageToMessage
} = require('../models')

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

const JoinmessageMood = async (req, res) => {
  try {
    const messageId = req.params.id
    let { mood, message, private, userId } = req.body

    switch (mood) {
      case 'sad':
        mood = 1
        break
      case 'happy':
        mood = 2
        break
      case 'angry':
        mood = 3
        break
      case 'nervous':
        mood = 4
        break
      case 'loved':
        mood = 5
        break
      case 'anxious':
        mood = 6
        break
    }

    const msg = await Message.create({
      message: message,
      private: private,
      userId: userId
    })

    const msgMood = await MessageMood.create({
      moodId: mood,
      messageId: msg.id
    })

    if (msgMood && msg) {
      return res.status(201).json({ msg, msgMood })
    }
    res.status(401).send({ msg: 'Check message content' })
  } catch (error) {
    throw error
  }
}

const messageMood = async (req, res) => {
  try {
    const messageId = req.params.id
    let { mood, message, private, userId } = req.body

    switch (mood) {
      case 'sad':
        mood = 1
        break
      case 'happy':
        mood = 2
        break
      case 'angry':
        mood = 3
        break
      case 'nervous':
        mood = 4
        break
      case 'loved':
        mood = 5
        break
      case 'anxious':
        mood = 6
        break
    }

    const messageCate = await MessageMood.create({
      messageId: messageId,
      moodId: mood
    })

    if (messageCate) {
      return res.status(201).send(messageCate)
    }
    res.status(401).send({ msg: 'Check message content' })
  } catch (error) {
    throw error
  }
}

const getMessageMood = async (req, res) => {
  try {
    const id = req.params.id
    const messageCate = await Message.findAll({
      where: { userId: id },
      include: [{ model: Mood, as: 'messageMood', attributes: [] }]
    })
    if (messageCate) {
      return res.status(200).send(messageCate)
    }
    res.status(201).send({ mgs: 'nothing found' })
  } catch (error) {
    throw error
  }
}

const getAllMessageMood = async (req, res) => {
  try {
    const id = req.params.id
    const msgMood = await Message.findAll({
      where: { private: false },
      include: [
        { model: Mood, as: 'messageMood', attributes: ['mood'] },
        { model: Message, as: 'commentMsg' },
        { model: User, attributes: ['email', 'firstName'] },
        { model: Rating }
      ]
    })
    if (msgMood) {
      return res.status(200).send(msgMood)
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
        { model: Mood, as: 'messageMood', attributes: ['mood'] },
        { model: Rating, attributes: ['rating'] },
        { model: User, attributes: ['email', 'firstName'] }
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

const getMsgToMsg = async (req, res) => {
  try {
    const id = req.params.id
    const msg = await Message.findOne({
      where: { id: id },
      include: [
        {
          model: Message,
          as: 'commentMsg',
          include: [
            { model: User, attributes: ['firstName'] },
            { model: Rating }
          ]
        },
        { model: User, attributes: ['firstName', 'email', 'id'] }
      ]
    })
    if (msg) {
      return res.status(200).json(msg)
    }
    res.status(400).ssend({ msg: 'check request' })
  } catch (error) {
    throw error
  }
}

const postMsgToMsgComment = async (req, res) => {
  try {
    const ogMsg = req.params.id
    const commentMsg = req.body

    const comMsg = await Message.create(commentMsg)

    const msgToMsg = await MessageToMessage.create({
      messageId: ogMsg,
      commentId: comMsg.id
    })
    if (comMsg && msgToMsg) {
      return res.status(201).json({ comMsg, msgToMsg })
    }
    res.status(400).send({ msg: 'check submittion' })
  } catch (error) {
    throw error
  }
}

module.exports = {
  newMessage,
  messageMood,
  getMessageMood,
  getMsgRateCate,
  JoinmessageMood,
  getAllMessageMood,
  postMsgToMsgComment,
  getMsgToMsg
}
