const router = require('express').Router()
const controller = require('../controllers/MoodController')

// router.get('', (req, res) => {
//   res.send('Mood Root')
// })
router.get('/', controller.getMood)

router.post('/new', controller.newMood)

module.exports = router
