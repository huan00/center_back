const router = require('express').Router()
const controller = require('../controllers/RatingController')

router.get('', (req, res) => {
  res.send('Rating Root!!')
})

module.exports = router
