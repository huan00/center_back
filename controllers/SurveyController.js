const { Survey } = require('../models')

const postSurvey = async (req, res) => {
  try {
    const surveyInfo = req.body
    console.log(surveyInfo)
    const survey = await Survey.create(surveyInfo)

    if (survey) {
      return res.status(201).send(survey)
    }
    res.status(400).send({ msg: 'check info' })
  } catch (error) {
    throw error
  }
}

const getById = async (req, res) => {
  try {
    const id = req.params.id
    const survey = await Survey.findOne({ where: { id: id } })
    if (survey) {
      return res.status(201).json(survey)
    }
    res.status(400).send({ msg: 'Survey not found' })
  } catch (error) {
    throw error
  }
}

module.exports = {
  postSurvey,
  getById
}
