const router = require('express').Router()
const controller = require('../controllers/RatingController')
const { route } = require('./MessageRoutes')

// router.get('', (req, res) => {
//   res.send('Rating Root!!')
// })

router.post('/new', controller.newRating)
router.post('/createupdate', controller.updateRating)

module.exports = router
