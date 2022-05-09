const { Rating, Message } = require('../models')

const newRating = async (req, res) => {
  try {
    const msgId = req.body.messageId
    const ratingData = req.body.rating
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

module.exports = { newRating }
