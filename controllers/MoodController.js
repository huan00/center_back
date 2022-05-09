const { Mood } = require('../models')

const newMood = async (req, res) => {
  try {
    const newCateData = req.body
    const newCate = await Mood.create(newCateData)
    if (newCate) {
      return res.status(201).send(newCate)
    }
    res.status(400).send({ msg: 'please check entry.' })
  } catch (error) {
    throw error
  }
}

module.exports = { newMood }
