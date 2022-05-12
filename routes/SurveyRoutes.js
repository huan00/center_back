const router = require('express').Router()
const controller = require('../controllers/SurveyController')

router.post('/new', controller.postSurvey)
router.get('/getbyid/:id', controller.getById)

module.exports = router
