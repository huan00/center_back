const router = require('express').Router()
const controller = require('../controllers/MessageController')

// router.get('', (req, res) => {
//   res.send('message ROOT!!')
// })
router.get('/messagemood/:id', controller.getMessageMood)
router.get('/ratingmood/:id', controller.getMsgRateCate)

router.post('/new', controller.newMessage)
router.post('/messageMood/:id', controller.messageMood)

module.exports = router
