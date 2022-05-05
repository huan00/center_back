const router = require('express').Router()
const controller = require('../controllers/MessageController')

// router.get('', (req, res) => {
//   res.send('message ROOT!!')
// })

router.post('/new', controller.newMessage)

module.exports = router
