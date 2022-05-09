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

module.exports = {
  postSurvey
}
