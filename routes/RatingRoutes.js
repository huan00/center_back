const router = require('express').Router()
const controller = require('../controllers/RatingController')

// router.get('', (req, res) => {
//   res.send('Rating Root!!')
// })

router.post('/new', controller.newRating)

module.exports = router
