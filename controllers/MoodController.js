const { Mood } = require('../models')

const newMood = async (req, res) => {
  try {
    const moodInfo = req.body
    console.log(moodInfo)
    const mood = await Mood.create(moodInfo)
    if (mood) {
      return res.status(201).send(mood)
    }
    res.status(400).send({ msg: 'please check entry.' })
  } catch (error) {
    throw error
  }
}

const getMood = async (req, res) => {
  try {
    const moods = await Mood.findAll()
    if (moods) {
      return res.status(200).json(moods)
    }
    res.status(400).send({ msg: 'no data' })
  } catch (error) {
    throw error
  }
}

module.exports = { newMood, getMood }
