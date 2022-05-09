const router = require('express').Router()
const controller = require('../controllers/SurveyController')

router.post('/new', controller.postSurvey)

module.exports = router
