const { Rating, Message } = require('../models')

const newRating = async (req, res) => {
  try {
    const msgId = req.body.messageId
    const ratingData = req.body.rating

    console.log(msgId)
    console.log(ratingData)
    const rating = await Rating.create({
      messageId: msgId,
      rating: ratingData
    })
    if (rating) {
      return res.status(201).send(rating)
    }
    res.status(401).send({ msg: 'Check content' })
  } catch (error) {
    throw error
  }
}

const updateRating = async (req, res) => {
  try {
    const msgId = req.body.messageId

    const findMsg = await Rating.findOne({ where: { messageId: msgId } })
    if (findMsg) {
      const rating = findMsg.rating + 1
      const updateRating = await Rating.update(
        { rating: rating },
        { where: { messageId: msgId } }
      )
      if (updateRating) {
        return res.status(200).json(updateRating)
      }
    } else {
      const newRating = await Rating.create({ messageId: msgId, rating: 1 })
      if (newRating) {
        return res.status(200).json(newRating)
      }
    }

    res.status(400).send({ msg: 'error updating likes' })
  } catch (error) {
    throw error
  }
}

module.exports = { newRating, updateRating }
